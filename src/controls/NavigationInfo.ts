import Modal from './Modal';
import GalleryScene from '../Scene';
import t from '../locale';

export default class NavigationInfoModal {
	private _modal: Modal;
	constructor() {
		this._modal = new Modal('navigation-info-modal', this._closeCallbackFunction);
		const modalTitle = document.createElement('h3');
		modalTitle.innerText = t('Navigation Controls');
		this._modal.header.appendChild(modalTitle);
		const innerHTML = `
        <p><strong>${t('Turn')}: </strong>${t(
					'Click and drag with the mouse or one finger over the gallery'
				)}.</p>
        <p><strong>${t('Forward / Backward')}: </strong>${t(
					'Use the virtual joystick, mouse wheel or vertical arrows keys'
				)}.</p>
        <p><strong>${t('Lateral movements')}: </strong>${t('Use the virtual joystick or the horizontal arrows keys')}.</p>
        <p><strong>${t('Move to next content')}: </strong>${t(
					'Use the arrow buttons or the spacebar'
				)}.</p>
		<p><strong>${t('Activate Zoom Mode')}: </strong>${t(
					'Click on the zoom icon that appears when you are approaching to a content'
				)}.</p>`;

		this._modal.body.innerHTML = innerHTML;
	}
	show() {
		this._modal.show();
		GalleryScene.instance.isModalOpen = true;
	}
	_closeCallbackFunction() {
		GalleryScene.instance.viewer?.controls.initRoomAudio();
		GalleryScene.instance.isModalOpen = false;
	}
}
