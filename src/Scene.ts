import "./style.css";
import {
  Clock,
  PCFSoftShadowMap,
  PerspectiveCamera,
  Scene,
  Vector3,
  WebGLRenderer,
} from "three";
import type GalleryData from "./@types/GalleryData";
import Room from "./@types/Room";
import type WallType from "./@types/Wall";
import Frame from "./@types/Frame";
import type AbstractEntity from "./entities/AbstractEntity";
import Wall from "./entities/Wall";
import Plane from "./entities/Plane";
import Content from "./entities/Content";
import Viewer from "./Viewer";
import ResourceManager from "./ResourceManager";
import * as Lights from "./Lights";

interface ViewerSettings {
  POINTER_SLOW_SPEED_RANGE?: number;
  POINTER_SLOW_SPEED_CORRECTION_FACTOR?: number;
  POINTER_FAST_SPEED_CORRECTION_FACTOR?: number;
  POINTER_ROTATION_RANGE?: number;
  POINTER_ROTATION_CORRECTION_FACTOR?: number;
  KEYS_ARROWS_SPEED?: number;
  WHEEL_RANGE?: number;
  WHEEL_CORRECTION_FACTOR?: number;
  THETA_FACTOR?: number;
  TRANSLATION_SPEED?: number;
  FAST_TRANSLATION_SPEED?: number;
  FAST_TRANSLATION_RANGE?: number;
  COLLISION_DISTANCE?: number;
  ZOOM_SPEED?: number;
  PHI_SPEED?: number;
  THETA_SPEED?: number;
  MIN_END_DISTANCE?: number;
  MAX_END_DISTANCE?: number;
  VIEWER_HIGHT?: number;

  INITIAL_POSITION?: [number, number, number];
  START_MODAL?: "none" | "navigation-info" | "brochure";
}

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
    const galleryHTMLDiv = document.createElement("div");
    galleryHTMLDiv.id = "gallery-scene";
    document.body.appendChild(galleryHTMLDiv);
    this._camera = new PerspectiveCamera(45, aspectRatio, 0.1, 10000);
    this._renderer = new WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    this._renderer.setPixelRatio(devicePixelRatio);
    this._renderer.setSize(innerWidth, innerHeight);
    this._renderer.setClearColor(0x00000, 1);
    this._renderer.shadowMap.enabled = true;
    this._renderer.shadowMap.type = PCFSoftShadowMap;
    galleryHTMLDiv.appendChild(this._renderer.domElement);
    window.addEventListener("resize", this._resize, false);
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
      const {
        position,
        size,
        angle,
        color,
        backgroundPatternId,
        backgroundImageId,
        audioId,
      } = wallData;
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
        const content = new Content(
          wallIndex,
          resourceId,
          size,
          frameData,
          isVideo
        );
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
          spotLightBox.position.set(
            content.mesh.position.x,
            this._maxWallHight,
            100
          );
          wall.mesh.add(spotLightBox);
        }
      });
      wall.mesh.userData.wallIndex = wallIndex;
      this._scene.add(wall.mesh);
      this._entities.push(wall);
      wallIndex += 1;
    });
  };

  public createRoom = async (
    galleryData: GalleryData,
    settings: ViewerSettings | null = null
  ) => {
    if (!galleryData || !galleryData.room) return;
    this._galleryData = galleryData;
    if (galleryData.allResources)
      ResourceManager.instance.load(galleryData.allResources);
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
    const viewerHight = settings?.VIEWER_HIGHT ? settings?.VIEWER_HIGHT : 175;
    const initialPosition = settings?.INITIAL_POSITION
      ? new Vector3(...settings?.INITIAL_POSITION)
      : new Vector3(
          firstWallWidth *
            (Math.sin(firstWallAngle) + Math.cos(firstWallAngle)),
          viewerHight,
          firstWallWidth * (Math.cos(firstWallAngle) - Math.sin(firstWallAngle))
        );
    const thetaFactor = settings?.THETA_FACTOR ? settings?.THETA_FACTOR : 20;
    this._viewer = new Viewer(
      initialPosition,
      firstWallAngle,
      -Math.PI / thetaFactor
    );
    if (settings) this._viewer.setSettings(settings);

    const starModal = settings?.START_MODAL
      ? settings?.START_MODAL
      : "navigation-info";

	if(starModal == "brochure") this._viewer.controls.menu.brochureModal.show();
	if(starModal == "navigation-info") this._viewer.controls.menu.navigationInfoModal.show();
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
