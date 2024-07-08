import {
  Mesh,
  BoxGeometry,
  MeshStandardMaterial,
  MeshPhysicalMaterial,
  CircleGeometry,
  MeshBasicMaterial,
  Shape,
  ShapeGeometry,
} from "three";
import ResourceManager from "../ResourceManager";
import Frame from "../@types/Frame";
class Content {
  readonly _wallIndex: number;
  readonly _resourceId: string;
  readonly _isVideo: boolean;
  readonly _size: number[];
  readonly _frameData: Frame | null;
  private _mesh: Mesh = new Mesh();
  public get mesh() {
    return this._mesh;
  }
  constructor(
    wallIndex: number,
    resourceId: string,
    size: number[], //[hight, width, depth]
    frameData: Frame | null = null,
    isVideo = false
  ) {
    this._wallIndex = wallIndex;
    this._resourceId = resourceId;
    this._size = size;
    this._frameData = frameData;
    this._isVideo = isVideo;
  }
  public load = async (isHighPerformace: boolean = false) => {
    const contentGeometry = new BoxGeometry(...this._size);
    let contentMaterial: MeshStandardMaterial | MeshBasicMaterial;
    if (isHighPerformace) {
      contentMaterial = new MeshBasicMaterial();
    } else {
      contentMaterial = new MeshStandardMaterial();
    }
    const contentImage = ResourceManager.instance.getImageResource(
      this._resourceId
    );
    if (!contentImage) return;
    contentMaterial.map = contentImage;
    const contentMesh = new Mesh(contentGeometry, contentMaterial);
    contentMesh.userData.type = "content";
    contentMesh.userData.id = this._resourceId;
    contentMesh.userData.wallIndex = this._wallIndex;
    contentMesh.castShadow = true;
    this._mesh.add(contentMesh);

    if (this._frameData) {
      const { frameWidth, frameColor, matWidth, matColor, isGlassed } =
        this._frameData;
      const matGeometryHorizontal = new BoxGeometry(
        this._size[0] + matWidth / 10,
        matWidth / 10,
        0.1
      );
      const matGeometryVertical = new BoxGeometry(
        matWidth / 10,
        this._size[1] + matWidth / 10,
        0.1
      );
      const matMaterial = contentMaterial.clone();
      matMaterial.map = null;
      matMaterial.color.set(matColor);
      const matMeshTop = new Mesh(matGeometryHorizontal, matMaterial);
      const matMeshBottom = new Mesh(matGeometryHorizontal, matMaterial);
      const matMeshLeft = new Mesh(matGeometryVertical, matMaterial);
      const matMeshRight = new Mesh(matGeometryVertical, matMaterial);

      matMeshTop.castShadow = true;
      matMeshLeft.castShadow = true;
      matMeshRight.castShadow = true;
      contentMesh.receiveShadow = true;

      matMeshTop.position.set(
        matWidth / 20,
        this._size[1] / 2 + matWidth / 20,
        0.8
      );
      matMeshBottom.position.set(
        -matWidth / 20,
        -this._size[1] / 2 - matWidth / 20,
        0.8
      );
      matMeshLeft.position.set(
        -this._size[0] / 2 - matWidth / 20,
        matWidth / 20,
        0.8
      );
      matMeshRight.position.set(
        this._size[0] / 2 + matWidth / 20,
        -matWidth / 20,
        0.8
      );
      this._mesh.add(matMeshTop, matMeshBottom, matMeshLeft, matMeshRight);

      const frameGeometryHorizontal = new BoxGeometry(
        this._size[0] + (2 * matWidth + frameWidth) / 10,
        frameWidth / 10,
        frameWidth / 10
      );
      const frameGeometryVertical = new BoxGeometry(
        frameWidth / 10,
        this._size[1] + (2 * matWidth + frameWidth) / 10,
        frameWidth / 10
      );

      const frameMaterial = matMaterial.clone();
      frameMaterial.color.set(frameColor);
      const frameMeshTop = new Mesh(frameGeometryHorizontal, frameMaterial);
      const frameMeshBottom = new Mesh(frameGeometryHorizontal, frameMaterial);
      const frameMeshLeft = new Mesh(frameGeometryVertical, frameMaterial);
      const frameMeshRight = new Mesh(frameGeometryVertical, frameMaterial);

      frameMeshBottom.castShadow = true;
      frameMeshRight.castShadow = true;
      frameMeshLeft.castShadow = true;

      frameMeshTop.position.set(
        frameWidth / 20,
        this._size[1] / 2 + matWidth / 10 + frameWidth / 20,
        0.1
      );
      frameMeshBottom.position.set(
        -frameWidth / 20,
        -this._size[1] / 2 - (matWidth / 10 + frameWidth / 20),
        0.1
      );
      frameMeshLeft.position.set(
        -this._size[0] / 2 - (matWidth / 10 + frameWidth / 20),
        frameWidth / 20,
        0.1
      );
      frameMeshRight.position.set(
        this._size[0] / 2 + (matWidth / 10 + frameWidth / 20),
        -frameWidth / 20,
        0.1
      );

      this._mesh.add(
        frameMeshTop,
        frameMeshBottom,
        frameMeshLeft,
        frameMeshRight
      );

      if (isGlassed) {
        const glassGeometry = new BoxGeometry(
          this._size[0] + (2 * matWidth) / 10,
          this._size[1] + (2 * matWidth) / 10,
          0.1
        );
        const glassMaterial = new MeshPhysicalMaterial({
          roughness: 0,
          transmission: 1,
          reflectivity: 0,
        });
        const glassMesh = new Mesh(glassGeometry, glassMaterial);
        glassMesh.position.set(0, 0, 1);
        glassMesh.userData.type = "content";
        glassMesh.userData.id = this._resourceId;
        glassMesh.userData.wallIndex = this._wallIndex;
        this._mesh.add(glassMesh);
      }
    }

    if (this._isVideo) {
      const playerMaterial = new MeshBasicMaterial({
        color: "white",
        opacity: 0.3,
        transparent: true,
      });

      const playerMesh = new Mesh(new CircleGeometry(20, 40), playerMaterial);
      playerMesh.position.set(0, 0, 2);

      const triangleShape = new Shape();
      triangleShape.moveTo(-10, -10);
      triangleShape.lineTo(10, 0);
      triangleShape.lineTo(-10, 10);
      triangleShape.lineTo(-10, -10);
      const triangleGeometry = new ShapeGeometry(triangleShape);
      const triangleMaterial = new MeshBasicMaterial({
        color: "white",
        opacity: 0.6,
        transparent: true,
      });
      const triangleMesh = new Mesh(triangleGeometry, triangleMaterial);
      triangleMesh.position.set(2.5, 0, -0.5);

      playerMesh.add(triangleMesh);
      playerMesh.userData.type = "video-player";
      playerMesh.userData.id = this._resourceId;
      this._mesh.add(playerMesh);
    }

    this._mesh.userData.type = "content";
    this._mesh.userData.id = this._resourceId;
    this._mesh.userData.wallIndex = this._wallIndex;
  };
}

export default Content;
