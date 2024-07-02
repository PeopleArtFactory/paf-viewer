import { Box3, BoxGeometry, Mesh, MeshStandardMaterial, Vector3 } from 'three';
import AbstractEntity from './AbstractEntity';
import ResourceManager from '../ResourceManager';

class Plane extends AbstractEntity {
	readonly _lengths: number[];
	readonly _color: string | null;
	readonly _backgroundPatternId: string | null;
	readonly _backgroundImageId: string | null;

	constructor(
		lengths: Vector3,
		color: string | null = 'red',
		backgroundPatternId: string | null = null,
		backgroundImageId: string | null = null
	) {
		const position = new Vector3(lengths.x / 2, lengths.y, lengths.z / 2);
		super(position);
		this._lengths = [lengths.x, lengths.y, lengths.z];
		this._color = color;
		this._backgroundPatternId = backgroundPatternId;
		this._backgroundImageId = backgroundImageId;
	}
	public load = async () => {
		const geometry = new BoxGeometry(this._lengths[0] * 2, this._lengths[2] * 2, 0.1);
		if (this._color) {
			const material = new MeshStandardMaterial({
				color: this._color
			});
			const plane = new Mesh(geometry, material);
			this._mesh.add(plane);
		}
		const delta = this._lengths[1] > 0 ? -1 : 1;
		if (this._backgroundImageId) {
			const backgroundImageTexture = ResourceManager.instance.getImageResource(
				this._backgroundImageId
			);
			const materialBackgroundImage = new MeshStandardMaterial({
				map: backgroundImageTexture
			});
			const planeBackground = new Mesh(geometry, materialBackgroundImage);
			planeBackground.position.set(0, delta, 0);
			this._mesh.add(planeBackground);
		}
		this._mesh.rotateX(Math.PI / 2);
		// create a collider for this object
		this._collider = new Box3().setFromObject(this._mesh);
	};
}
export default Plane;
