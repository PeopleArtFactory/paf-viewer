import type { Audio } from 'three';
import ResourceManager from '../ResourceManager';

class AudioControl {
	private _isPlayingAudio = true;
	private _generalAudio: Audio | null = null;
	private _activeAudio: Audio | null = null;
	private _activeAudioId: string | null = null;
	private _audioButtom: HTMLDivElement;

	constructor(controlsBar: HTMLElement) {
		const audioControlButtom = document.createElement('div');
		audioControlButtom.id = 'audio-control-buttom';
		audioControlButtom.className = 'icon-audio-off';
		controlsBar?.appendChild(audioControlButtom);
		audioControlButtom.addEventListener(
			'click',
			() => {
				this.toggleAudio();
			},
			false
		);
		this._audioButtom = audioControlButtom;
	}

	public playNewAudioById(newAudioId: string, isGeneralAudio = false) {
		if (this._activeAudioId === newAudioId || !this._isPlayingAudio) return;
		this._activeAudio?.stop();
		this._audioButtom.className = 'icon-audio-on';
		const newAudio = ResourceManager.instance.getAudioResource(newAudioId);
		if (newAudio) {
			newAudio.play();
			if (isGeneralAudio) {
				this._generalAudio = newAudio;
			} else {
				this._activeAudio = newAudio;
				this._activeAudioId = newAudioId;
			}
		}
	}

	public toggleAudio() {
		if (this._isPlayingAudio) {
			this._generalAudio?.pause();
			this._activeAudio?.pause();
			this._audioButtom.className = 'icon-audio-off';
		} else {
			this._generalAudio?.play();
			this._activeAudio?.play();
			this._audioButtom.className = 'icon-audio-on';
		}
		this._isPlayingAudio = !this._isPlayingAudio;
	}

	public get generalAudio() {
		return this._generalAudio;
	}
	public isPlayingAudio() {
		return this._isPlayingAudio;
	}
	
}
export default AudioControl;
