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
import type Room from "./@types/Room";
import type WallType from "./@types/Wall";
import type Frame from "./@types/Frame";

import AbstractEntity from "./entities/AbstractEntity";
import Wall from "./entities/Wall";
import Plane from "./entities/Plane";
import Content from "./entities/Content";
import Viewer from "./Viewer";
import ResourceManager from "./ResourceManager";
import * as Lights from "./Lights";

interface Settings {
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
  HIGH_PERFORMANCE?: boolean; // If true switch off points lights and shadows.
}

export default class GalleryScene {
  private static _instance = new GalleryScene();
  private _scene = new Scene();
  private _camera: PerspectiveCamera;
  private _renderer: WebGLRenderer;
  private _viewer: Viewer | null = null;
  private _galleryData: GalleryData | null = null;
  private _settings: Settings | null = null;
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
    this._camera = new PerspectiveCamera(45, aspectRatio);
    this._renderer = new WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    this._renderer.setPixelRatio(devicePixelRatio);
    this._renderer.setSize(innerWidth, innerHeight);
    this._renderer.setClearColor(0x00000, 1);
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

  private _createWalls = async (room: Room, isHighPerformace = false) => {
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
      await wall.load(isHighPerformace);
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
        await content.load(isHighPerformace);
        content.mesh.position.set(
          position[0] + size[0] / 2,
          wallData.size[1] - position[1] - size[1] / 2,
          position[2]
        );
        wall.mesh.add(content.mesh);
        if (
          contentData.spotLight &&
          room.lights.spotLights &&
          !isHighPerformace
        ) {
          const {
            color,
            intensity,
            distance,
            angle,
            penumbra,
            decay,
            positionZ,
          } = room.lights.spotLights[contentData.spotLight.spotLightIndex];
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
          const _positionZ = positionZ ? positionZ : 100;
          spotLightBox.position.set(
            content.mesh.position.x,
            this._maxWallHight,
            _positionZ
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

  public load = async (
    galleryData: GalleryData,
    settings: Settings | null = null
  ) => {
    if (!galleryData) return;
    this._galleryData = galleryData;
    this._settings = settings;
    //LOAD RESOURCES
    if (galleryData.allResources)
      ResourceManager.instance.load(galleryData.allResources);
    this.createRoom(settings?.HIGH_PERFORMANCE);
  };
  public createRoom = async (isHighPerformace = false) => {
    const galleryData = this._galleryData;
    const settings = this._settings;
    if (!galleryData || !galleryData.room) return;
    this._scene.clear();
    const { ceiling, floor, lights } = galleryData.room;
    //WALLS & CONTENTS
    await this._createWalls(galleryData.room, isHighPerformace);
    //CEILING & FLOOR
    //The size is calculated from wall's max distance
    const deltaWallDistanceX =
      this._maxWallDistance.x - this._minWallDistance.x;
    const deltaWallDistanceZ =
      this._maxWallDistance.z - this._minWallDistance.z;
    const _ceiling = new Plane(
      new Vector3(deltaWallDistanceX, this._maxWallHight, deltaWallDistanceZ),
      ceiling.color,
      ceiling.backgroundImageId
    );
    await _ceiling.load(isHighPerformace);
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
    await _floor.load(isHighPerformace);
    _floor.mesh.receiveShadow = true;
    this._scene.add(_floor.mesh);
    this._entities.push(_floor);
    //VIEWER & CONTROLS
    if (!this._viewer) {
      const firstWallAngle = galleryData.room?.walls[0].angle;
      const firstWallWidth = galleryData.room?.walls[0].size[0] / 2;
      const viewerHight = settings?.VIEWER_HIGHT ? settings?.VIEWER_HIGHT : 175;
      const initialPosition = settings?.INITIAL_POSITION
        ? new Vector3(...settings?.INITIAL_POSITION)
        : new Vector3(
            firstWallWidth *
              (Math.sin(firstWallAngle) + Math.cos(firstWallAngle)),
            viewerHight,
            firstWallWidth *
              (Math.cos(firstWallAngle) - Math.sin(firstWallAngle))
          );
      const thetaFactor = settings?.THETA_FACTOR ? settings?.THETA_FACTOR : 20;
      this._viewer = new Viewer(
        initialPosition,
        firstWallAngle,
        -Math.PI / thetaFactor
      );
      if (settings) this._viewer.setSettings(settings);
      //STAR MODAL
      const starModal = settings?.START_MODAL
        ? settings?.START_MODAL
        : "navigation-info";
      if (starModal == "brochure")
        this._viewer.controls.menu.brochureModal.show();
      if (starModal == "navigation-info")
        this._viewer.controls.menu.navigationInfoModal.show();
    }
    this._viewer.controls.menu.setHightPerformance(isHighPerformace);
    //LIGHTS & SHADOWS
    if (!isHighPerformace) {
      const ambientLight = Lights.setAmbientLight(
        lights.ambientLight.color,
        lights.ambientLight.intensity
      );
      this._scene.add(ambientLight);
      this._renderer.shadowMap.enabled = true;
      this._renderer.shadowMap.type = PCFSoftShadowMap;
    }

    //RENDERING
    this._camera.far = Math.max(deltaWallDistanceX, deltaWallDistanceZ) * 1.1;
    this._render();
  };

  public get galleryData() {
    return this._galleryData;
  }

  public get settings() {
    return this._settings;
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
