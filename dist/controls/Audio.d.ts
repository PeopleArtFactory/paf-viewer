declare class AudioControl {
    private _isPlayingAudio;
    private _generalAudio;
    private _activeAudio;
    private _activeAudioId;
    private _audioButtom;
    constructor(controlsBar: HTMLElement);
    playNewAudioById(newAudioId: string, isGeneralAudio?: boolean): void;
    toggleAudio(audioControlButtom: HTMLDivElement): void;
}
export default AudioControl;
