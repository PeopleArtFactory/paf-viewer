import type { Object3D } from "three";
import type Wall from "./@types/Wall";
import ResourceManager from "./ResourceManager";
import GalleryScene from "./Scene";
import AudioControl from "./controls/Audio";
import FullScreenControl from "./controls/Fullscreen";
import ShareControl from "./controls/Share";
import Menu from "./controls/Menu";
import t from "./locale";

function getFirstWallContentId(wall: Wall, directionSign = 1) {
  if (wall.contents == undefined || wall.contents.length == 0) return null;
  let firstWallContentPosition = (wall.size[0] * (1 + directionSign)) / 2;
  let firstWallContentId = wall.contents[0].resourceId;

  for (let i = 0; i < wall.contents.length; i++) {
    if (directionSign > 0) {
      if (wall.contents[i].position[0] < firstWallContentPosition) {
        firstWallContentPosition = wall.contents[i].position[0];
        firstWallContentId = wall.contents[i].resourceId;
      }
    } else {
      if (wall.contents[i].position[0] > firstWallContentPosition) {
        firstWallContentPosition = wall.contents[i].position[0];
        firstWallContentId = wall.contents[i].resourceId;
      }
    }
  }
  return firstWallContentId;
}

export default class Controls {
  private _wallsObj3D: Object3D[] = GalleryScene.instance.children.filter(
    (obj) => obj.userData.type === "wall"
  );
  private _activeWallIndex = 0;
  private _activeWallLabel: HTMLElement;
  private _activeContentId: string | null = null;
  private _contentInfo: HTMLElement;
  private _zoomButtom: HTMLElement;
  private _audioControl: AudioControl | null = null;
  private _menuOptions: Menu;
  private _isFirstLoad = true;
  public isZoomActive = false;

  constructor() {
    const contentInfoDiv = document.createElement("div");
    contentInfoDiv.id = "content-info-div";
    contentInfoDiv.className = "hiden";
    document.body.appendChild(contentInfoDiv);
    this._contentInfo = contentInfoDiv;
    const controlsPanel = document.getElementById("controls-panel");
    const activeWallLabel = document.createElement("div");
    activeWallLabel.id = "active-wall-label";
    controlsPanel?.appendChild(activeWallLabel);
    this._activeWallLabel = activeWallLabel;
    this.setActiveWallIndex(0);
    const controlsBar = document.createElement("div");
    controlsBar.id = "gallery-controls-bar";
    controlsPanel?.appendChild(controlsBar);
    this._menuOptions = new Menu(controlsBar);
    new ShareControl(controlsBar);
    const audioResourcesSize = ResourceManager.instance.getAudioResourcesSize();

    if (audioResourcesSize > 0) {
      this._audioControl = new AudioControl(controlsBar);
    }
    new FullScreenControl(controlsBar);

    const logo = document.createElement("div");
    logo.id = "logo-paf";
    controlsBar.appendChild(logo);
    logo.addEventListener(
      "click",
      () => {
        window.open("https://www.peopleartfactory.com", "_blank");
      },
      false
    );

    const controlButtomLeft = document.createElement("div");
    controlButtomLeft.id = "control-buttom-left";
    controlButtomLeft.classList.add("control-buttom");
    controlsPanel?.appendChild(controlButtomLeft);
    controlButtomLeft.addEventListener(
      "click",
      () => {
        this.moveToNextContent(-1);
      },
      false
    );
    const controlButtomRight = document.createElement("div");
    controlButtomRight.id = "control-buttom-right";
    controlButtomRight.classList.add("control-buttom");
    controlsPanel?.appendChild(controlButtomRight);
    controlButtomRight.addEventListener(
      "click",
      () => {
        this.moveToNextContent(1);
      },
      false
    );

    const controlZoom = document.createElement("div");
    controlZoom.id = "control-zoom";
    controlZoom.className = "icon-zoom zoom-in hiden";
    controlsPanel?.appendChild(controlZoom);
    this._zoomButtom = controlZoom;
    controlZoom.addEventListener(
      "click",
      () => {
        this._zoomActiveContent(
          controlZoom,
          controlButtomLeft,
          controlButtomRight
        );
      },
      false
    );

    window.addEventListener(
      "keyup",
      (e: KeyboardEvent) => {
        if (e.code == "Space") this.moveToNextContent();
      },
      false
    );
  }

  private _moveToNextWall(directionSign = 1) {
    const maxWallIndex = this._wallsObj3D.length - 1;
    let nextWallIndex = this._activeWallIndex + directionSign;
    nextWallIndex = nextWallIndex < 0 ? maxWallIndex : nextWallIndex;
    nextWallIndex = nextWallIndex > maxWallIndex ? 0 : nextWallIndex;
    const nextWall =
      GalleryScene.instance.galleryData?.room?.walls[nextWallIndex];
    if (!nextWall) return;

    this.castShadowWallLights(nextWallIndex);
    const fistWallContentId = getFirstWallContentId(nextWall, directionSign);
    this._activeContentId = fistWallContentId;
    let target: Object3D | null = null;

    if (fistWallContentId) {
      //case 1: There is a first content on next active wall.
      target = this._wallsObj3D[nextWallIndex].children.filter(
        (item) => item.userData.id === fistWallContentId
      )[0];
    } else {
      //case 2: There is no content on next active wall.
      target = this._wallsObj3D[nextWallIndex];
    }
    GalleryScene.instance?.viewer?.moveToObject3D(target);
  }

  private _zoomActiveContent(
    controlZoom: HTMLDivElement,
    controlButtomLeft: HTMLDivElement,
    controlButtomRight: HTMLDivElement
  ) {
    const activeWallIndex = this._activeWallIndex;
    const activeContentId = this._activeContentId;
    this.isZoomActive = !this.isZoomActive;
    const target = this._wallsObj3D[activeWallIndex].children.filter(
      (item) => item.userData.id === activeContentId
    )[0];
    GalleryScene.instance?.viewer?.moveToObject3D(target);
    if (this.isZoomActive) {
      controlZoom.classList.replace("zoom-in", "zoom-out");
      controlButtomLeft.classList.add("hiden");
      controlButtomRight.classList.add("hiden");
    } else {
      controlZoom.classList.replace("zoom-out", "zoom-in");
      controlButtomLeft.classList.remove("hiden");
      controlButtomRight.classList.remove("hiden");
    }
  }

  public setActiveWallIndex(activeWallIndex: number) {
    const maxWallNumber = GalleryScene.instance.galleryData?.room?.walls.length;
    if (!maxWallNumber) return;
    this._activeWallIndex = activeWallIndex;

    this._activeWallLabel.innerHTML = `<p>${t("Wall")}: ${
      this._activeWallIndex + 1
    }<small> / ${maxWallNumber}</small></p>`;
  }

  public castShadowWallLights(wallActiveIndex = 0) {
    let wallIndex = 0;
    let actualValue = false;
    this._wallsObj3D.forEach((item) => {
      const spotLightsBox = item.children.filter(
        (item) => item.userData.type === "spotLight"
      );
      spotLightsBox.forEach((item) => {
        actualValue = wallIndex === wallActiveIndex ? true : false;
        item.children.filter(
          (item) => item.type === "SpotLight"
        )[0].castShadow = actualValue;
      });
      wallIndex++;
    });
  }

  public moveToNextContent(directionSign = 1) {
    if (this.isZoomActive) return;
    this.hideContentInfo();
    //case 0: There is no active content yet.
    if (!this._activeContentId) {
      const wall =
        GalleryScene.instance.galleryData?.room?.walls[this._activeWallIndex];
      if (!wall) return;
      const fistWallContentId = getFirstWallContentId(wall, -directionSign);
      let target: Object3D | null = null;
      //case 0.1: There is a first content on active wall.
      if (fistWallContentId) {
        this._activeContentId = fistWallContentId;
        target = this._wallsObj3D[this._activeWallIndex].children.filter(
          (item) => item.userData.id === fistWallContentId
        )[0];
        GalleryScene.instance?.viewer?.moveToObject3D(target);
      } else {
        //case 0.2: There is no content on active wall.
        this._moveToNextWall(directionSign);
      }
      return;
    }

    const restOfContentsInActiveWall = this._wallsObj3D[
      this._activeWallIndex
    ].children.filter(
      (item) =>
        item.userData.type == "content" &&
        item.userData.id !== this._activeContentId
    );
    //case 1: there are more than one content in the active wall.
    if (restOfContentsInActiveWall.length > 0) {
      const activeContent = this._wallsObj3D[
        this._activeWallIndex
      ].children.filter(
        (item) => item.userData.id === this._activeContentId
      )[0];
      if (!activeContent) return;
      let minDistance = Infinity;
      let target: Object3D | null = null;
      let i = 0;
      restOfContentsInActiveWall.forEach((item) => {
        if (
          Math.sign(item.position.x - activeContent.position.x) ==
            directionSign &&
          minDistance > Math.abs(item.position.x - activeContent.position.x)
        )
          target = item;

        if (i === restOfContentsInActiveWall.length - 1) {
          if (target) {
            this._activeContentId = item.userData.id;
            GalleryScene.instance?.viewer?.moveToObject3D(target);
            return;
          } else {
            this._moveToNextWall(directionSign);
          }
        }
        i++;
      });
    } else {
      //case 2: there is just the active content in the active wall.
      this._moveToNextWall(directionSign);
    }
  }

  public showContentInfo(contentId: string) {
    if (!this._menuOptions.isPlacardActived) return;
    const content = GalleryScene.instance.galleryData?.allResources?.filter(
      (item) => item.id === contentId
    )[0];
    if (!content) return;
    this._activeContentId = contentId;
    const contentInfo = content.info;

    if (contentInfo && !content.disabled) {
      this._contentInfo.classList.remove("hiden");
      this._zoomButtom.classList.remove("hiden");
      let innerHTML = `<strong>${contentInfo.name}</strong>`;
      innerHTML += contentInfo.description
        ? `<p>${contentInfo.description}</p>`
        : "</br></br>";
      const { showDimensions, height, width, depth } = {
        ...contentInfo.realDimensions,
      };
      if (showDimensions) {
        if (height && width && depth) {
          innerHTML += `<small>${height} x ${width} x ${depth} cm - 
					${(height * 0.39).toFixed(2)} x ${(width * 0.39).toFixed(2)} x ${(
            depth * 0.39
          ).toFixed(2)} in</small>`;
        }
        if (height && width) {
          innerHTML += `<small>${height} x ${width} cm - ${(
            height * 0.39
          ).toFixed(2)} x ${(width * 0.39).toFixed(2)} in</small>`;
        }
      }
      if (contentInfo.price && contentInfo.price != "0")
        innerHTML += `<p>${contentInfo.price}</p>`;
      const labelTex = t("Open Link");
      if (contentInfo.refUrl) {
        innerHTML += `</br></strong><a href="${contentInfo.refUrl}" target="_blank" style="display:flex;margin-top:15px;font-weight:bold"><div class="icon-external-link" style="margin-top:-3px" ></div>${labelTex}</a></strong>`;
      }
      this._contentInfo.innerHTML = innerHTML;
    }
  }

  public hideContentInfo() {
    this._contentInfo.className = "hiden";
  }

  public playNewAudioById(newAudioId: string, isGeneralAudio = false) {
    this._audioControl?.playNewAudioById(newAudioId, isGeneralAudio);
  }

  public initRoomAudio() {

    console.log("initRoomAudio");
    const generalAudioId =
      GalleryScene.instance.galleryData?.room?.generalAudioId;
    if (generalAudioId && this._isFirstLoad) {
      this._audioControl?.playNewAudioById(generalAudioId, true);
      this._isFirstLoad = false;
    }
  }

  public get menu() {
    return this._menuOptions;
  }
}
