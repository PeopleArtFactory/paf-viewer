import { Box3, Mesh, Sphere, Vector3 } from 'three';

// discriminator for the type of entity
type EntityType = 'wall';

abstract class GalleryEntity {
	protected _position: Vector3;
	protected _mesh: Mesh = new Mesh();
	public get mesh() {
		return this._mesh;
	}

	protected _collider?: Box3 | Sphere;
	public get collider() {
		return this._collider;
	}

	protected _entityType: EntityType;
	public get entityType() {
		return this._entityType;
	}

	constructor(position: Vector3, entityType: EntityType = 'wall') {
		this._entityType = entityType;
		this._position = position;
		const { x, y, z } = position;
		this._mesh.position.set(x, y, z);
	}

	// methods
	public load = async () => {};
	public update = (_deltaT: number) => {};
}

export default GalleryEntity;
