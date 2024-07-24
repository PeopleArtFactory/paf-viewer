import { PerspectiveCamera } from 'three';
import { default as GalleryData } from './@types/GalleryData';
import { default as AbstractEntity } from './entities/AbstractEntity';
import { default as Viewer } from './Viewer';

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
    CONTENT_DISTANCE?: number;
    VIEWER_HIGHT?: number;
    INITIAL_POSITION?: [number, number, number];
    START_MODAL?: "none" | "navigation-info" | "brochure";
    HIGH_PERFORMANCE?: boolean;
}
export default class GalleryScene {
    private static _instance;
    private _scene;
    private _camera;
    private _renderer;
    private _viewer;
    private _galleryData;
    private _settings;
    private _entities;
    private _clock;
    private _maxWallPosition;
    private _minWallPosition;
    private _maxWallHight;
    private _windowInnerWidth;
    isModalOpen: boolean;
    private constructor();
    private _resize;
    private _render;
    private _createWalls;
    load: (galleryData: GalleryData, settings?: Settings | null) => Promise<void>;
    createRoom: (isHighPerformace?: boolean) => Promise<void>;
    get galleryData(): GalleryData | null;
    get settings(): Settings | null;
    static get instance(): GalleryScene;
    get camera(): PerspectiveCamera;
    get children(): import('three').Object3D<import('three').Object3DEventMap>[];
    get entities(): AbstractEntity[];
    get viewer(): Viewer | null;
    get windowInnerWidth(): number;
}
export {};
