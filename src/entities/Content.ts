import {
  Mesh,
  BoxGeometry,
  MeshStandardMaterial,
  MeshPhysicalMaterial,
  LineBasicMaterial,
  Line,
  Vector3,
  BufferGeometry,
  CircleGeometry,
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
  public load = async () => {
    const contentGeometry = new BoxGeometry(...this._size);
    const contentMaterial = new MeshStandardMaterial({
      map: ResourceManager.instance.getImageResource(this._resourceId),
    });
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
      const matMaterial = new MeshStandardMaterial({
        color: matColor,
      });
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
      const frameMaterial = new MeshStandardMaterial({
        color: frameColor,
      });

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
      const playerMaterial = new MeshStandardMaterial({
        color: "white",
      });
      const playerMesh = new Mesh(new CircleGeometry(20, 40), playerMaterial);
      playerMesh.position.set(0, 0, 2);
      const lineMaterial = new LineBasicMaterial({
        color: "black",
        linewidth: 2,
      });
      const linePoints: Vector3[] = [];
      linePoints.push(new Vector3(-8, 10, 0));
      linePoints.push(new Vector3(12, 0, 0));
      linePoints.push(new Vector3(-8, -10, 0));
      linePoints.push(new Vector3(-8, 10, 0));
      const geometry = new BufferGeometry().setFromPoints(linePoints);
      const line = new Line(geometry, lineMaterial);
      line.position.set(0, 0, 1);
      playerMesh.add(line);
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
