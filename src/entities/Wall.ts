import { Box3, BoxGeometry, Mesh, MeshStandardMaterial, Vector3 } from 'three';
import AbstractEntity from './AbstractEntity';
import ResourceManager from '../ResourceManager';

class Wall extends AbstractEntity {
	readonly _size: number[];
	readonly _angle: number;
	readonly _color: string;
	readonly _backgroundPatternId: string | null;
	readonly _backgroundImageId: string | null;

	constructor(
		position: Vector3,
		size: number[],
		angle: number,
		color: string,
		backgroundPatternId: string | null = null,
		backgroundImageId: string | null = null,
		audioId: string | null = null
	) {
		super(position);
		this._size = size;
		this._angle = angle;
		this._color = color;
		this._backgroundPatternId = backgroundPatternId;
		this._backgroundImageId = backgroundImageId;
		this.mesh.userData.type = 'wall';
		this.mesh.userData.audioId = audioId;
		this.mesh.userData.angle = angle;
	}
	public load = async () => {
		const geometry = new BoxGeometry(...this._size);
		const material = new MeshStandardMaterial({
			color: this._color
		});
		const wall = new Mesh(geometry, material);
		wall.receiveShadow = true;
		wall.userData.type = 'wall';
		wall.position.set(this._size[0] / 2, this._size[1] / 2, this._size[2]);
		this._mesh.add(wall);
		if (this._backgroundImageId) {
			const backgroundImageTexture = ResourceManager.instance.getImageResource(
				this._backgroundImageId
			);
			const materialBackgroundImage = new MeshStandardMaterial({
				map: backgroundImageTexture
			});
			const wallBackground = new Mesh(geometry, materialBackgroundImage);
			wallBackground.userData.type = 'wall';
			wallBackground.position.set(this._size[0] / 2, this._size[1] / 2, this._size[2]);
			this._mesh.add(wallBackground);
		}

		this._mesh.rotateY(this._angle);
		// create a collider for this object
		this._collider = new Box3().setFromObject(this._mesh);
	};
}

export default Wall;
