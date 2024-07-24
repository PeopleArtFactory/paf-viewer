import {
  Box3,
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Vector3,
} from "three";
import AbstractEntity from "./AbstractEntity";
import ResourceManager from "../ResourceManager";

class Plane extends AbstractEntity {
  readonly _center: Vector3;
  readonly _size: number;
  readonly _color: string;
  readonly _backgroundImageId: string | null;

  constructor(
    center: Vector3,
    size: number,
    color: string,
    backgroundImageId: string | null = null
  ) {
    super(center);
    this._center = center;
    this._size = size;
    this._color = color;
    this._backgroundImageId = backgroundImageId;
  }
  public load = async (isHighPerformace: boolean = false) => {
    const geometry = new BoxGeometry(this._size, this._size, 1);

    let material: MeshStandardMaterial | MeshBasicMaterial;
    if (isHighPerformace) {
      material = new MeshBasicMaterial();
    } else {
      material = new MeshStandardMaterial();
    }
    material.color.set(this._color);
    const plane = new Mesh(geometry, material);
    this._mesh.add(plane);
    const delta = this._center.y > 0 ? -1 : 1;
    if (this._backgroundImageId) {
      const backgroundImageTexture = ResourceManager.instance.getImageResource(
        this._backgroundImageId
      );
      if (backgroundImageTexture) {
        const materialBackgroundImage = material.clone();
        materialBackgroundImage.color.set("white");
        materialBackgroundImage.map = backgroundImageTexture;
        const planeBackground = new Mesh(geometry, materialBackgroundImage);
        planeBackground.position.set(0, delta, 0);
        this._mesh.add(planeBackground);
      }
    }
    this._mesh.rotateX(Math.PI / 2);
    // create a collider for this object
    this._collider = new Box3().setFromObject(this._mesh);
  };
}
export default Plane;
