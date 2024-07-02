import './style.css';
import Setting from './Settings.json';
import { Clock, PCFSoftShadowMap, PerspectiveCamera, Scene, Vector3, WebGLRenderer } from 'three';
import type GalleryData from './@types/GalleryData';
import Room from './@types/Room';
import type WallType from './@types/Wall';
import Frame from './@types/Frame';
import type AbstractEntity from './entities/AbstractEntity';
import Wall from './entities/Wall';
import Plane from './entities/Plane';
import Content from './entities/Content';
import Viewer from './Viewer';
import ResourceManager from './ResourceManager';
import * as Lights from './Lights';

const { CAMARA_FOV, CAMARA_NEAR, CAMARA_FAR, VIEWER_HIGHT } = Setting;

export default class GalleryScene {
	private static _instance = new GalleryScene();
	private _scene = new Scene();
	private _camera: PerspectiveCamera;
	private _renderer: WebGLRenderer;
	private _viewer: Viewer | null = null;
	private _galleryData: GalleryData | null = null;
	private _entities: AbstractEntity[] = [];
	private _clock: Clock = new Clock();
	private _maxWallDistance = new Vector3(0, 0, 0);
	private _minWallDistance = new Vector3(0, 0, 0);
	private _maxWallHight = 0;
	public isModalOpen = false;

	private constructor() {
		const { innerWidth, innerHeight, devicePixelRatio } = window;
		const aspectRatio = innerWidth / innerHeight;
		const galleryHTMLDiv = document.createElement('div');
		galleryHTMLDiv.id = 'gallery-scene';
		document.body.appendChild(galleryHTMLDiv);
		this._camera = new PerspectiveCamera(CAMARA_FOV, aspectRatio, CAMARA_NEAR, CAMARA_FAR);
		this._renderer = new WebGLRenderer({
			alpha: true,
			antialias: true
		});
		this._renderer.setPixelRatio(devicePixelRatio);
		this._renderer.setSize(innerWidth, innerHeight);
		this._renderer.setClearColor(0x00000, 1);
		this._renderer.shadowMap.enabled = true;
		this._renderer.shadowMap.type = PCFSoftShadowMap;
		galleryHTMLDiv.appendChild(this._renderer.domElement);
		window.addEventListener('resize', this._resize, false);
	}

	private _resize = () => {
		const { innerWidth, innerHeight } = window;
		this._renderer.setSize(innerWidth, innerHeight);
		this._camera.aspect = innerWidth / innerHeight;
		this._camera.updateProjectionMatrix();
	};

	private _render = () => {
		const deltaT = this._clock.getDelta();
		this._viewer?.update(deltaT);
		this._renderer.render(this._scene, this._camera);
		requestAnimationFrame(this._render);
	};

	private _createWalls = async (room: Room) => {
		let wallIndex = 0;
		room.walls.forEach(async (wallData: WallType) => {
			const { position, size, angle, color, backgroundPatternId, backgroundImageId, audioId } =
				wallData;
			const wallPosition = new Vector3(...position);
			const wall = new Wall(
				wallPosition,
				size,
				angle,
				color,
				backgroundPatternId,
				backgroundImageId,
				audioId
			);
			await wall.load();
			this._maxWallDistance.max(wallPosition);
			this._minWallDistance.min(wallPosition);
			this._maxWallHight = Math.max(this._maxWallHight, size[1]);
			wallData.contents?.forEach(async (contentData) => {
				const { resourceId, position, size, frameIndex, isVideo } = contentData;
				let frameData: Frame | null = null;
				if (frameIndex != undefined && room.frames) {
					frameData = room.frames[frameIndex];
				}
				const content = new Content(wallIndex, resourceId, size, frameData, isVideo);
				await content.load();
				content.mesh.position.set(
					position[0] + size[0] / 2,
					wallData.size[1] - position[1] - size[1] / 2,
					position[2]
				);
				wall.mesh.add(content.mesh);
				if (contentData.spotLight && room?.lights.spotLights) {
					const { color, intensity, distance, angle, penumbra, decay } =
						room?.lights.spotLights[contentData.spotLight.spotLightIndex];
					const spotLightBox = Lights.addSpotLight(
						wall._color,
						color,
						intensity,
						distance,
						angle,
						penumbra,
						decay,
						content.mesh
					);
					spotLightBox.position.set(content.mesh.position.x, this._maxWallHight, 100);
					wall.mesh.add(spotLightBox);
				}
			});
			wall.mesh.userData.wallIndex = wallIndex;
			this._scene.add(wall.mesh);
			this._entities.push(wall);
			wallIndex += 1;
		});
	};

	public createRoom = async (galleryData: GalleryData) => {
		if (!galleryData || !galleryData.room) return;
		this._galleryData = galleryData;
		if (galleryData.allResources) ResourceManager.instance.load(galleryData.allResources);
		await this._createWalls(galleryData.room);
		const { ceiling, floor, lights } = galleryData.room;
		const _ceiling = new Plane(
			new Vector3(
				this._maxWallDistance.x - this._minWallDistance.x,
				this._maxWallHight,
				this._maxWallDistance.z - this._minWallDistance.z
			),
			ceiling.color,
			ceiling.backgroundImageId
		);
		await _ceiling.load();
		this._scene.add(_ceiling.mesh);
		this._entities.push(_ceiling);
		const _floor = new Plane(
			new Vector3(
				this._maxWallDistance.x - this._minWallDistance.x,
				0,
				this._maxWallDistance.z - this._minWallDistance.z
			),
			floor.color,
			floor.backgroundImageId
		);
		await _floor.load();
		_floor.mesh.receiveShadow = true;

		this._scene.add(_floor.mesh);
		this._entities.push(_floor);
		const ambientLight = Lights.setAmbientLight(
			lights.ambientLight.color,
			lights.ambientLight.intensity
		);
		this._scene.add(ambientLight);
		const firstWallAngle = galleryData.room?.walls[0].angle;
		const firstWallWidth = galleryData.room?.walls[0].size[0] / 2;
		this._viewer = new Viewer(
			new Vector3(
				firstWallWidth * (Math.sin(firstWallAngle) + Math.cos(firstWallAngle)),
				VIEWER_HIGHT,
				firstWallWidth * (Math.cos(firstWallAngle) - Math.sin(firstWallAngle))
			),
			firstWallAngle
		);
		this._render();
	};

	public get galleryData() {
		return this._galleryData;
	}
	public static get instance() {
		return this._instance;
	}
	public get camera() {
		return this._camera;
	}
	public get children() {
		return this._scene.children;
	}
	public get entities() {
		return this._entities;
	}
	public get viewer() {
		return this._viewer;
	}
}
