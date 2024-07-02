import type { Resource } from './@types/Resource';
import { Audio, AudioLoader, AudioListener, SRGBColorSpace, Texture, TextureLoader } from 'three';
import GalleryScene from './Scene';
// import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

class ResourceManager {
	private static _instance = new ResourceManager();
	public static get instance() {
		return this._instance;
	}
	private _imageResources = new Map<string, Texture>();
	public getImageResource(id: string): Texture | undefined {
		return this._imageResources.get(id);
	}
	public getImageResourcesSize() {
		return this._imageResources.size;
	}
	private _audioResources = new Map<string, Audio>();
	public getAudioResource(id: string): Audio | undefined {
		return this._audioResources.get(id);
	}
	public getAudioResourcesSize() {
		return this._audioResources.size;
	}

	constructor() {}
	public load = (allResources: Resource[]) => {
		const allImageResources: Resource[] = allResources.filter(
			(resource: { type: string }) => resource.type == 'image' || resource.type == 'background'
		);
		if (allImageResources.length > 0) {
			const textureLoader = new TextureLoader();
			textureLoader.crossOrigin = 'Anonymous';
			this._loadImageResources(textureLoader, allImageResources);
		}

		const allAudioResources: Resource[] = allResources.filter(
			(resource: { type: string }) => resource.type === 'audio'
		);
		if (allAudioResources.length > 0) {
			const audioLoader = new AudioLoader();
			const audioListener = new AudioListener();
			GalleryScene.instance.camera.add(audioListener);
			this._loadAudioResources(audioLoader, audioListener, allAudioResources);
		}

		const allVideoResources: Resource[] = allResources.filter(
			(resource: { type: string }) => resource.type == 'video'
		);
		if (allVideoResources.length > 0) {
			const textureLoader = new TextureLoader();
			textureLoader.crossOrigin = 'anonymous';
			this._loadVideoResources(textureLoader, allVideoResources);
		}
	};

	private _loadImageResources = async (
		textureLoader: TextureLoader,
		allImageResources: Resource[]
	) => {
		allImageResources.forEach((resourceData) => {
			const { id, url } = resourceData;
			const imageTexture = textureLoader.load(url);
			imageTexture.colorSpace = SRGBColorSpace;
			this._imageResources.set(id, imageTexture);
		});
	};

	private _loadVideoResources = async (
		textureLoader: TextureLoader,
		allVideoResources: Resource[]
	) => {
		allVideoResources.forEach((resourceData) => {
			const { id } = resourceData;
			if (resourceData.mediaPlayer?.thumbnailUrl) {
				const imageTexture = textureLoader.load(resourceData.mediaPlayer.thumbnailUrl);
				imageTexture.colorSpace = SRGBColorSpace;
				this._imageResources.set(id, imageTexture);
			}
		});
	};

	private _loadAudioResources = async (
		audioLoader: AudioLoader,
		audioListener: AudioListener,
		allAudioResources: Resource[]
	) => {
		allAudioResources.forEach((resourceData) => {
			const { id, url, mediaPlayer } = resourceData;
			const loop = mediaPlayer?.loop ? true : false;
			const audio = new Audio(audioListener);
			audioLoader.load(url, (buffer) => {
				audio.setBuffer(buffer);
				audio.setLoop(loop);
				audio.setVolume(1);
			});

			this._audioResources.set(id, audio);
		});
	};
}
export default ResourceManager;
