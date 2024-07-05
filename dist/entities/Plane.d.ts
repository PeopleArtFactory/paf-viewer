import { Vector3 } from 'three';
import { default as AbstractEntity } from './AbstractEntity';

declare class Plane extends AbstractEntity {
    readonly _lengths: number[];
    readonly _color: string | null;
    readonly _backgroundPatternId: string | null;
    readonly _backgroundImageId: string | null;
    constructor(lengths: Vector3, color?: string | null, backgroundPatternId?: string | null, backgroundImageId?: string | null);
    load: () => Promise<void>;
}
export default Plane;
