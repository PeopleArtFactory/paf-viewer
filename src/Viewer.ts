import {
  Object3D,
  PerspectiveCamera,
  Quaternion,
  Raycaster,
  Sphere,
  Vector2,
  Vector3,
} from "three";
import GalleryScene from "./Scene";
import Controls from "./Controls";
import VideoPlayer from "./controls/VideoPlayer";

let VIEWER_HIGHT = 175;
let POINTER_SLOW_SPEED_RANGE = 100;
let POINTER_SLOW_SPEED_CORRECTION_FACTOR = 0.5;
let POINTER_FAST_SPEED_CORRECTION_FACTOR = 10;
let POINTER_ROTATION_RANGE = 30;
let POINTER_ROTATION_CORRECTION_FACTOR = 100;
let KEYS_ARROWS_SPEED = 10;
let WHEEL_RANGE = 90;
let WHEEL_CORRECTION_FACTOR = 15;

let THETA_FACTOR = 20;
let TRANSLATION_SPEED = 30;
let FAST_TRANSLATION_SPEED = 60;
let FAST_TRANSLATION_RANGE = 500;
let ZOOM_SPEED = 1.5;
let PHI_SPEED = 0.8;
let THETA_SPEED = 0.4;
let COLLISION_DISTANCE = 20;
let MIN_END_DISTANCE = 30;
let MAX_END_DISTANCE = 200;
interface Pointer {
  id: number;
  initPosition: Vector2;
  isJostick: boolean;
}

interface InputState {
  deltaViewerRotation: Vector2;
  deltaViewerPosition: Vector2;
  pointerPosition: Vector2 | null;
}

function clamp(x: number, a: number, b: number) {
  return Math.min(Math.max(x, a), b);
}

class InputController {
  private _pointers: Pointer[];
  private _inputState: InputState;
  constructor() {
    this._pointers = [];
    this._inputState = {
      deltaViewerRotation: new Vector2(),
      deltaViewerPosition: new Vector2(),
      pointerPosition: null,
    };

    const sceneDiv = document.getElementById("gallery-scene");
    sceneDiv?.addEventListener("pointerdown", (e: PointerEvent) =>
      this._onPointerDown(e)
    );
    sceneDiv?.addEventListener("pointerup", (e: PointerEvent) =>
      this._onPointerUp(e)
    );
    sceneDiv?.addEventListener(
      "pointermove",
      (e: PointerEvent) => this._onPointerMove(e),
      false
    );

    const controlsPanel = document.createElement("div");
    controlsPanel.id = "controls-panel";
    document.body.appendChild(controlsPanel);
    controlsPanel.addEventListener("pointerdown", (e: PointerEvent) =>
      this._onPointerDown(e)
    );
    controlsPanel.addEventListener("pointerup", (e: PointerEvent) =>
      this._onPointerUp(e)
    );
    controlsPanel.addEventListener(
      "pointermove",
      (e: PointerEvent) => this._onPointerMove(e),
      false
    );

    const walkControl = document.createElement("div");
    walkControl.id = "walk-control";
    controlsPanel.appendChild(walkControl);
    const walkControlRef = document.createElement("div");
    walkControlRef.id = "walk-control-ref";
    walkControl.appendChild(walkControlRef);
    walkControl.addEventListener("pointerdown", (e: PointerEvent) =>
      this._onPointerDown(e)
    );
    walkControl.addEventListener("pointermove", (e: PointerEvent) =>
      this._onPointerMove(e)
    );

    window.addEventListener("keydown", (e: KeyboardEvent) =>
      this._onKeyDown(e)
    );
    window.addEventListener("keyup", (e: KeyboardEvent) => this._onKeyUp(e));
    window.addEventListener("wheel", (e: WheelEvent) => this._onWheel(e));
  }

  private _onPointerDown(e: PointerEvent) {
    e.stopPropagation();
    e.preventDefault();
    let isJostick = false;
    const eTarget = e.target as HTMLElement;
    if (eTarget.id === "walk-control" || eTarget.id === "walk-control-ref")
      isJostick = true;
    const newPointer: Pointer = {
      id: e.pointerId,
      initPosition: new Vector2(e.pageX, e.pageY),
      isJostick: isJostick,
    };
    this._pointers.push(newPointer);
  }

  private _onPointerUp(e: PointerEvent) {
    const activePointer = this._pointers.filter(
      (pointer) => pointer.id === e.pointerId
    )[0];
    const deltaPointerPosition = new Vector2();
    deltaPointerPosition.set(
      activePointer.initPosition.x - e.pageX,
      activePointer.initPosition.y - e.pageY
    );
    if (deltaPointerPosition.length() < 1) this._setPointerPosition(e);
    this._inputState.deltaViewerPosition.set(0, 0);
    this._inputState.deltaViewerRotation.set(0, 0);
    this._pointers = this._pointers.filter(
      (pointer) => pointer.id != e.pointerId
    );
    this._updateWalkRef(this._inputState.deltaViewerPosition);
  }

  private _onPointerMove(e: PointerEvent) {
    e.preventDefault();
    const activePointer = this._pointers.filter(
      (pointer) => pointer.id === e.pointerId
    )[0];
    if (!activePointer) return;
    const deltaPointerPosition = new Vector2();

    if (activePointer.isJostick) {
      deltaPointerPosition.set(
        activePointer.initPosition.x - e.pageX,
        activePointer.initPosition.y - e.pageY
      );
      if (deltaPointerPosition.length() < POINTER_SLOW_SPEED_RANGE) {
        deltaPointerPosition.divideScalar(
          deltaPointerPosition.length() / POINTER_SLOW_SPEED_CORRECTION_FACTOR
        );
      } else {
        deltaPointerPosition.divideScalar(
          deltaPointerPosition.length() / POINTER_FAST_SPEED_CORRECTION_FACTOR
        );
      }
      this._inputState.deltaViewerPosition = deltaPointerPosition;
      this._updateWalkRef(deltaPointerPosition);
    } else {
      deltaPointerPosition.set(
        e.pageX - activePointer.initPosition.x,
        e.pageY - activePointer.initPosition.y
      );
      if (deltaPointerPosition.length() > POINTER_ROTATION_RANGE)
        deltaPointerPosition.divideScalar(
          deltaPointerPosition.length() / POINTER_ROTATION_CORRECTION_FACTOR
        );
      this._inputState.deltaViewerRotation = deltaPointerPosition;
    }
  }

  private _updateWalkRef(deltaViewerPosition: Vector2) {
    const walkControlRef = document.getElementById("walk-control-ref");
    if (!walkControlRef) return;
    walkControlRef.style.left = -deltaViewerPosition.x * 2 + "px";
    walkControlRef.style.top = -deltaViewerPosition.y * 2 + "px";
  }

  private _setPointerPosition(e: MouseEvent) {
    const newPosition = new Vector2();
    newPosition.x = (e.clientX / window.innerWidth) * 2 - 1;
    newPosition.y = -(e.clientY / window.innerHeight) * 2 + 1;
    this._inputState.pointerPosition = newPosition;
  }

  private _onKeyDown(e: KeyboardEvent) {
    switch (e.key) {
      case "ArrowLeft":
        this._inputState.deltaViewerPosition.x = KEYS_ARROWS_SPEED;
        break;
      case "ArrowRight":
        this._inputState.deltaViewerPosition.x = -KEYS_ARROWS_SPEED;
        break;
      case "ArrowUp":
        this._inputState.deltaViewerPosition.y = KEYS_ARROWS_SPEED;
        break;
      case "ArrowDown":
        this._inputState.deltaViewerPosition.y = -KEYS_ARROWS_SPEED;
        break;
    }
  }

  private _onKeyUp(e: KeyboardEvent) {
    switch (e.key) {
      case "ArrowLeft":
        this._inputState.deltaViewerPosition.x = 0;
        break;
      case "ArrowRight":
        this._inputState.deltaViewerPosition.x = 0;
        break;
      case "ArrowUp":
        this._inputState.deltaViewerPosition.y = 0;
        break;
      case "ArrowDown":
        this._inputState.deltaViewerPosition.y = 0;
        break;
    }
  }

  private _onWheel(e: WheelEvent) {
    this._inputState.deltaViewerPosition.y = e.deltaY;
    if (this._inputState.deltaViewerPosition.length() > WHEEL_RANGE)
      this._inputState.deltaViewerPosition.divideScalar(
        this._inputState.deltaViewerPosition.length() / WHEEL_CORRECTION_FACTOR
      );
    setTimeout(() => {
      this._inputState.deltaViewerPosition.y = 0;
    }, 200);
  }

  public reset() {
    this._inputState.pointerPosition = null;
  }

  public get state() {
    return this._inputState;
  }
}

class Viewer {
  private _position: Vector3;
  private _input: InputController;
  private _camera: PerspectiveCamera;
  private _rotation: Quaternion;
  private _phi: number;
  private _theta: number;
  private _controls: Controls;

  public setSettings(settings: Object) {
    for (const [key, value] of Object.entries(settings)) {
      try{eval(`${key} = ${value};`)}catch(e){}
    }
  }

  constructor(position: Vector3, phi = 0, theta = -Math.PI / THETA_FACTOR) {
    this._position = position;
    this._camera = GalleryScene.instance.camera;
    this._input = new InputController();
    this._rotation = new Quaternion();
    this._phi = phi;
    this._theta = theta;
    this._controls = new Controls();
  }

  private _updatePosition(deltaT: number) {
    if (GalleryScene.instance.isModalOpen) return;
    const inputState = this._input.state;

    const deltaViewerPositionLength = inputState.deltaViewerPosition.length();
    if (deltaViewerPositionLength > 1) this._controls.hideContentInfo();

    let lateralDirection = inputState.deltaViewerPosition.x;
    let forwardDirection = inputState.deltaViewerPosition.y;
    const q = new Quaternion();
    q.setFromAxisAngle(new Vector3(0, 1, 0), this._phi);
    let deltaForward: Vector3;
    if (this.controls.isZoomActive) {
      deltaForward = new Vector3(0, 1, 0);
      forwardDirection =
        Math.abs(forwardDirection) < ZOOM_SPEED
          ? forwardDirection
          : ZOOM_SPEED * Math.sign(forwardDirection);
      lateralDirection =
        Math.abs(lateralDirection) < ZOOM_SPEED
          ? lateralDirection
          : ZOOM_SPEED * Math.sign(lateralDirection);
    } else {
      deltaForward = new Vector3(0, 0, -1);
    }
    deltaForward.applyQuaternion(q);
    deltaForward.multiplyScalar(forwardDirection * deltaT * TRANSLATION_SPEED);

    const deltaLateral = new Vector3(-1, 0, 0);
    deltaLateral.applyQuaternion(q);
    deltaLateral.multiplyScalar(lateralDirection * deltaT * TRANSLATION_SPEED);

    // before updating the position check if there is a problem with the new one
    const testigPosition = this._position.clone();
    testigPosition.add(deltaForward).add(deltaLateral);
    const testingSphere = new Sphere(testigPosition, COLLISION_DISTANCE);

    // search for possible collisions
    const colliders = GalleryScene.instance.entities.filter((e) =>
      e.collider?.intersectsSphere(testingSphere)
    );
    if (colliders.length == 0) {
      this._position.copy(testigPosition);
    }
  }

  private _updateRotation() {
    if (GalleryScene.instance.isModalOpen) return;
    const inputState = this._input.state;

    const deltaViewerRotationLength = inputState.deltaViewerRotation.length();
    if (deltaViewerRotationLength > 10) this._controls.hideContentInfo();

    const xh = -inputState.deltaViewerRotation.x / window.innerWidth;
    const yh = -inputState.deltaViewerRotation.y / window.innerHeight;
    this._phi += -xh * PHI_SPEED;
    this._theta = clamp(
      this._theta + -yh * THETA_SPEED,
      -Math.PI / 10,
      Math.PI / 30
    );
    if (Math.abs(this._phi) >= (2 * Math.PI * 3) / 4)
      this._phi -= 2 * Math.PI * Math.sign(this._phi);
    const qx = new Quaternion();
    qx.setFromAxisAngle(new Vector3(0, 1, 0), this._phi);
    const qz = new Quaternion();
    qz.setFromAxisAngle(new Vector3(1, 0, 0), this._theta);
    const q = new Quaternion();
    q.multiply(qx);
    q.multiply(qz);
    this._rotation.copy(q);
  }

  private _updateCamera() {
    this._camera.quaternion.copy(this._rotation);
    this._camera.position.copy(this._position);
  }

  public update = (deltaT: number) => {
    this._updatePosition(deltaT);
    this._updateRotation();
    this._updateRayIntersections();
    this._updateCamera();
    this._input.reset();
  };

  private _updateRayIntersections() {
    if (GalleryScene.instance.isModalOpen) return;
    const mousePointer = this._input.state.pointerPosition;
    if (!mousePointer) return;
    const raycaster = new Raycaster();
    raycaster.setFromCamera(mousePointer, this._camera);
    const intersections = raycaster.intersectObjects(
      GalleryScene.instance.children,
      true
    );
    //case when is video player
    if (intersections[0].object.userData.type === "video-player") {
      const resourceId = intersections[0].object.userData.id;
      const playerData = GalleryScene.instance.galleryData?.allResources.filter(
        (r) => r.id === resourceId
      )[0].mediaPlayer;
      if (playerData) new VideoPlayer(playerData);
      return;
    }
    //case when is video image contente
    if (intersections[0].object.userData.type === "content") {
      this.moveToObject3D(intersections[0].object);
      return;
    }
    const contentInfoDiv = document.getElementById("content-info-div");
    if (contentInfoDiv) {
      contentInfoDiv.className = "hiden";
    }
  }

  public moveToObject3D(target: Object3D) {
    //  console.log(VIEWER_HIGHT)
    this._controls.hideContentInfo();
    if (GalleryScene.instance.isModalOpen || !target) return;
    const wallIndex = target.userData.wallIndex;
    const objType = target.userData.type;
    const wall = GalleryScene.instance.galleryData?.room?.walls[wallIndex];
    if (!wall) return;
    const wallAudioId = wall.audioId;
    let wallAngle = wall.angle;
    const endPoint = new Vector3();
    //Active lights shadow before viewer arrive to the wall
    this._controls.castShadowWallLights(wallIndex);

    //Reset input state to avoid click side-effect
    this._input.reset();
    let endDistanceToObject = MIN_END_DISTANCE;
    if (!this.controls.isZoomActive) {
      endDistanceToObject = MAX_END_DISTANCE;
      this._position.y = VIEWER_HIGHT;
    }
    target.getWorldPosition(endPoint);
    if (objType === "wall") {
      endPoint.x += (wall.size[0] / 2) * Math.cos(wallAngle);
      endPoint.z -= (wall.size[0] / 2) * Math.sin(wallAngle);
    }
    const distance = endPoint.distanceTo(this._position);
    const SPEED =
      distance < FAST_TRANSLATION_RANGE
        ? TRANSLATION_SPEED * 10
        : FAST_TRANSLATION_SPEED * 10;
    const duration = (distance / SPEED) * 1000;
    //Avoid long angle rotations
    if (Math.abs(wallAngle - this._phi) > Math.PI) wallAngle -= Math.PI * 2;

    const startTime = performance.now();
    const startPhi = this._phi;
    const startTheta = this._theta;
    const startPosition = this._position.clone();

    const step = () => {
      const now = performance.now();
      const delta = Math.min(Math.sqrt((now - startTime) / duration), 1);
      this._phi = startPhi * (1 - delta) + wallAngle * delta;
      this._theta = startTheta * (1 - delta) + (-Math.PI / 20) * delta;
      this._position.x =
        startPosition.x * (1 - delta) +
        (endPoint.x + endDistanceToObject * Math.sin(wallAngle)) * delta;
      this._position.z =
        startPosition.z * (1 - delta) +
        (endPoint.z + endDistanceToObject * Math.cos(wallAngle)) * delta;
      if (delta < 1) {
        // before updating the position check if there is a collision's problem
        const testigPosition = this._position.clone();
        const testingSphere = new Sphere(
          testigPosition,
          COLLISION_DISTANCE / 2
        );
        const colliders = GalleryScene.instance.entities.filter((e) =>
          e.collider?.intersectsSphere(testingSphere)
        );
        if (colliders.length == 0) requestAnimationFrame(step);
      } else {
        if (wallAudioId) this._controls.playNewAudioById(wallAudioId);
        const contentId = target.userData.id;
        this._controls.setActiveWallIndex(wallIndex);
        if (contentId) this._controls.showContentInfo(contentId);
      }
    };
    step();
  }

  public get controls() {
    return this._controls;
  }
}
export default Viewer;
