export default class Modal {
    private _modal;
    private _header;
    private _body;
    private _footer;
    constructor(modalId: string, callbackFunction?: () => void);
    show(): void;
    get header(): HTMLElement;
    get body(): HTMLElement;
    get footer(): HTMLElement;
}
