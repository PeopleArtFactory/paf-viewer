import { Box3, Mesh, Sphere, Vector3 } from 'three';

type EntityType = 'wall';
declare abstract class GalleryEntity {
    protected _position: Vector3;
    protected _mesh: Mesh;
    get mesh(): Mesh<import('three').BufferGeometry<import('three').NormalBufferAttributes>, import('three').Material | import('three').Material[], import('three').Object3DEventMap>;
    protected _collider?: Box3 | Sphere;
    get collider(): Box3 | Sphere | undefined;
    protected _entityType: EntityType;
    get entityType(): "wall";
    constructor(position: Vector3, entityType?: EntityType);
    load: () => Promise<void>;
    update: (_deltaT: number) => void;
}
export default GalleryEntity;
