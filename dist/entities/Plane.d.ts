import { Vector3 } from 'three';
import { default as AbstractEntity } from './AbstractEntity';

declare class Plane extends AbstractEntity {
    readonly _center: Vector3;
    readonly _size: number;
    readonly _color: string;
    readonly _backgroundImageId: string | null;
    constructor(center: Vector3, size: number, color: string, backgroundImageId?: string | null);
    load: (isHighPerformace?: boolean) => Promise<void>;
}
export default Plane;
