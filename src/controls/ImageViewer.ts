// @ts-ignore
import { FullScreenViewer } from "../lib/iv-viewer.es.js";
import "../lib/iv-viewer.min.css";
import GalleryScene from "../Scene.js";

export default class BrochureModal {
  private _viewer: FullScreenViewer;
  constructor() {
    this._viewer = new FullScreenViewer({
      listeners: {onHide: () => {this._closeCallbackFunction()}},
    });
  }
  show(imageUrl: string, imageHightUrl: string | undefined = undefined) {
    this._viewer.show(imageUrl, imageHightUrl);
    GalleryScene.instance.isModalOpen = true;
  
  }
  _closeCallbackFunction() {
    GalleryScene.instance.isModalOpen = false;
  }
}
