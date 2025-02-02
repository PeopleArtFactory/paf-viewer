export default class Modal {
  private _modal: HTMLElement;
  private _header: HTMLElement;
  private _body: HTMLElement;
  private _footer: HTMLElement;

  constructor(
    modalId: string,
    callbackFunction = () => {
      return;
    }
  ) {
    const modal = document.createElement("div");
    modal.id = modalId;
    modal.className = "modal hidden";
    document.body.appendChild(modal);

    const modalBackground = document.createElement("div");
    modalBackground.className = "modal-background";
    modal.appendChild(modalBackground);
    modalBackground.addEventListener("click", () => {
      modal.className = "modal hidden";
      callbackFunction();
    });

    const modalPanel = document.createElement("div");
    modalPanel.className = "modal-panel";
    modal.appendChild(modalPanel);
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    const modalBody = document.createElement("div");
    modalBody.style.width = "100%";
    const modalFooter = document.createElement("div");
    modalFooter.style.width = "100%";
    modalPanel.appendChild(modalHeader);
    modalPanel.appendChild(modalBody);
    modalPanel.appendChild(modalFooter);
    const closeButtom = document.createElement("div");
    closeButtom.innerHTML = `<span class="modal-close"></span>`;
    closeButtom.setAttribute("style", "display:inline-block;float:right");
    modalHeader.appendChild(closeButtom);
    closeButtom.addEventListener(
      "click",
      () => {
        modal.className = "modal hidden";
        callbackFunction();
      },
      false
    );
    this._modal = modal;
    this._header = modalHeader;
    this._body = modalBody;
    this._footer = modalFooter;
  }
  public show() {
    this._modal.classList.remove("hidden");
  }
  public get header() {
    return this._header;
  }
  public get body() {
    return this._body;
  }
  public get footer() {
    return this._footer;
  }
}
