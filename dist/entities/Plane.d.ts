import { Vector3 } from 'three';
import { default as AbstractEntity } from './AbstractEntity';

declare class Plane extends AbstractEntity {
    readonly _lengths: number[];
    readonly _color: string;
    readonly _backgroundImageId: string | null;
    constructor(lengths: Vector3, color: string, backgroundImageId?: string | null);
    load: (isHighPerformace?: boolean) => Promise<void>;
}
export default Plane;
