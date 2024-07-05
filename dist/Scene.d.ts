import { PerspectiveCamera } from 'three';
import { default as GalleryData } from './@types/GalleryData';
import { default as AbstractEntity } from './entities/AbstractEntity';
import { default as Viewer } from './Viewer';

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
    private static _instance;
    private _scene;
    private _camera;
    private _renderer;
    private _viewer;
    private _galleryData;
    private _entities;
    private _clock;
    private _maxWallDistance;
    private _minWallDistance;
    private _maxWallHight;
    isModalOpen: boolean;
    private constructor();
    private _resize;
    private _render;
    private _createWalls;
    createRoom: (galleryData: GalleryData, settings?: ViewerSettings | null) => Promise<void>;
    get galleryData(): GalleryData | null;
    static get instance(): GalleryScene;
    get camera(): PerspectiveCamera;
    get children(): import('three').Object3D<import('three').Object3DEventMap>[];
    get entities(): AbstractEntity[];
    get viewer(): Viewer | null;
}
export {};
