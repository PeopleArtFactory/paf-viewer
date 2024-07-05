import { Object3D, Vector3 } from 'three';
import { default as Controls } from './Controls';

declare class Viewer {
    private _position;
    private _input;
    private _camera;
    private _rotation;
    private _phi;
    private _theta;
    private _controls;
    setSettings(settings: Object): void;
    constructor(position: Vector3, phi?: number, theta?: number);
    private _updatePosition;
    private _updateRotation;
    private _updateCamera;
    update: (deltaT: number) => void;
    private _updateRayIntersections;
    moveToObject3D(target: Object3D): void;
    get controls(): Controls;
}
export default Viewer;
