import { Mesh, BufferGeometry } from 'three';
import { default as Frame } from '../@types/Frame';

declare class Content {
    readonly _wallIndex: number;
    readonly _resourceId: string;
    readonly _isVideo: boolean;
    readonly _size: number[];
    readonly _frameData: Frame | null;
    private _mesh;
    get mesh(): Mesh<BufferGeometry<import('three').NormalBufferAttributes>, import('three').Material | import('three').Material[], import('three').Object3DEventMap>;
    constructor(wallIndex: number, resourceId: string, size: number[], //[hight, width, depth]
    frameData?: Frame | null, isVideo?: boolean);
    load: () => Promise<void>;
}
export default Content;
