import type { Resource } from "./@types/Resource";
import {
  Audio,
  AudioLoader,
  AudioListener,
  SRGBColorSpace,
  Texture,
  TextureLoader,
} from "three";
import GalleryScene from "./Scene";
// import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

class ResourceManager {
  private static _instance = new ResourceManager();
  private _imageResources = new Map<string, Texture>();
  private _audioResources = new Map<string, Audio>();

  constructor() {}
  public load = (allResources: Resource[]) => {
    const allImageResources: Resource[] = allResources.filter(
      (resource: { type: string }) =>
        resource.type == "image" ||
        resource.type == "background" ||
        resource.type == "video"
    );
    const allAudioResources: Resource[] = allResources.filter(
      (resource: { type: string }) => resource.type === "audio"
    );

    if (allImageResources.length > 0) {
      const textureLoader = new TextureLoader();
      this._loadImageResources(textureLoader, allImageResources);
    }
    if (allAudioResources.length > 0) {
      const audioLoader = new AudioLoader();
      const audioListener = new AudioListener();
      GalleryScene.instance.camera.add(audioListener);
      this._loadAudioResources(audioLoader, audioListener, allAudioResources);
    }
  };

  private _loadImageResources = (
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

  private _loadAudioResources = (
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

  public static get instance() {
    return this._instance;
  }
  public getImageResource(id: string): Texture | undefined {
    return this._imageResources.get(id);
  }
  public getAudioResource(id: string): Audio | undefined {
    return this._audioResources.get(id);
  }
  public getAudioResourcesSize() {
    return this._audioResources.size;
  }
}
export default ResourceManager;
