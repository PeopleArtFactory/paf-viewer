import NavigationInfoModal from "./NavigationInfo";
import BrochureModal from "./Brochure";
import GalleryScene from "../Scene";

import t from "../locale";

export default class Menu {
  private _isPlacardActived = true;
  private _isHightPerformance: boolean | undefined =
    GalleryScene.instance.settings?.HIGH_PERFORMANCE;
  private _navigationInfoModal: NavigationInfoModal;
  private _brochureModal: BrochureModal;
  constructor(controlsBar: HTMLElement) {
    this._brochureModal = new BrochureModal();
    this._navigationInfoModal = new NavigationInfoModal();
    const menuPanel = document.createElement("div");
    menuPanel.id = "menu-panel";
    menuPanel.className = "hiden";
    document.body.appendChild(menuPanel);
    menuPanel.innerHTML = `<strong><h1>Menu</h1></strong>`;

    const closeButtom = document.createElement('div');
		closeButtom.innerHTML = `<span class="modal-close"></span>`;
		menuPanel.appendChild(closeButtom);
		closeButtom.addEventListener(
			'click',
			() => {
        menuPanel.className = "hiden";
			},
			false
		);

    const menuLink1 = document.createElement("div");
    menuLink1.className = "menu-link";
    menuPanel.appendChild(menuLink1);
    menuLink1.innerHTML = `${t("See brochure")}`;
    menuLink1.addEventListener(
      "click",
      () => {
        this._brochureModal.show();
      },
      false
    );

    const menuLink2 = document.createElement("div");
    menuLink2.className = "menu-link";
    menuPanel.appendChild(menuLink2);
    menuLink2.innerHTML = `${t("Navigation Controls")}`;
    menuLink2.addEventListener(
      "click",
      () => {
        this._navigationInfoModal.show();
      },
      false
    );

    const menuLink3 = document.createElement("div");
    menuLink3.className = "menu-link";
    menuPanel.appendChild(menuLink3);
    menuLink3.innerHTML = `<div class="switch  checked"></div>${t("Show placard")}`;
    menuLink3.addEventListener(
      "click",
      () => {
        if (!this._isPlacardActived) {
          menuLink3.innerHTML = `<div class="switch checked"></div>${t(
            "Show placard"
          )}`;
        } else {
          menuLink3.innerHTML = `<div class="switch"></div>${t(
            "Hide placard"
          )}`;
        }
        this._isPlacardActived = !this._isPlacardActived;
      },
      false
    );

    const menuLink4 = document.createElement("div");
    menuLink4.className = "menu-link";
    menuPanel.appendChild(menuLink4);
    if (this._isHightPerformance) {
      menuLink4.innerHTML = `<div class="switch checked"></div>${t(
        "High performance"
      )}`;
    } else {
      menuLink4.innerHTML = `<div class="switch"></div>${t(
        "High performance"
      )}`;
    }
    menuLink4.addEventListener(
      "click",
      () => {
        if (!this._isHightPerformance) {
          menuLink4.innerHTML = `<div class="switch checked"></div>${t(
            "High performance"
          )}`;
        } else {
          menuLink4.innerHTML = `<div class="switch "></div>${t(
            "High performance"
          )}`;
        }
        this._isHightPerformance = !this._isHightPerformance;
        GalleryScene.instance.createRoom(this._isHightPerformance);
      },
      false
    );

    const controlButtom = document.createElement("div");
    controlButtom.id = "menu-control-buttom";
    controlButtom.className = "icon-menu";
    controlsBar?.appendChild(controlButtom);
    controlButtom.addEventListener(
      "click",
      () => {
        menuPanel.classList.remove("hiden");
      },
      false
    );
  }
  public get isPlacardActived() {
    return this._isPlacardActived;
  }

  public setHightPerformance(value: boolean) {
    this._isHightPerformance = value;
  }
  public get navigationInfoModal() {
    return this._navigationInfoModal;
  }
  public get brochureModal() {
    return this._brochureModal;
  }
}
