import { Vector3 } from 'three';
import { default as AbstractEntity } from './AbstractEntity';

declare class Wall extends AbstractEntity {
    readonly _size: number[];
    readonly _angle: number;
    readonly _color: string;
    readonly _backgroundPatternId: string | null;
    readonly _backgroundImageId: string | null;
    constructor(position: Vector3, size: number[], angle: number, color: string, backgroundPatternId?: string | null, backgroundImageId?: string | null, audioId?: string | null);
    load: (isHighPerformace?: boolean) => Promise<void>;
}
export default Wall;
