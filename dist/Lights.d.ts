import { AmbientLight, BoxGeometry, Mesh, MeshStandardMaterial, Object3D } from 'three';

export declare function setAmbientLight(color?: string, intensity?: number): AmbientLight;
export declare function addSpotLight(boxColor: string, lightColor: string, intensity: number, distance: number, angle: number, penumbra: number, decay: number, target: Object3D): Mesh<BoxGeometry, MeshStandardMaterial, import('three').Object3DEventMap>;
