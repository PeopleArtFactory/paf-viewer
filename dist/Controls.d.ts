import { default as Menu } from './controls/Menu';

export default class Controls {
    private _wallsObj3D;
    private _activeWallIndex;
    private _activeWallLabel;
    private _activeContentId;
    private _contentInfo;
    private _zoomButtom;
    private _audioControl;
    private _menuOptions;
    private _isFirstLoad;
    isZoomActive: boolean;
    constructor();
    private _moveToNextWall;
    private _zoomActiveContent;
    setActiveWallIndex(activeWallIndex: number): void;
    castShadowWallLights(wallActiveIndex?: number): void;
    moveToNextContent(directionSign?: number): void;
    showContentInfo(contentId: string): void;
    hideContentInfo(): void;
    playNewAudioById(newAudioId: string, isGeneralAudio?: boolean): void;
    initRoomAudio(): void;
    get menu(): Menu;
}
