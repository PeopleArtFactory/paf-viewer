import NavigationInfoModal from './NavigationInfo';
import BrochureModal from './Brochure';
import t from '../locale';

export default class Menu {
	private _isPlacardActived = true;
	private _navigationInfoModal: NavigationInfoModal;
	private _brochureModal: BrochureModal;
	constructor(controlsBar: HTMLElement) {
		this._brochureModal = new BrochureModal()
		this._navigationInfoModal = new NavigationInfoModal()
		const menuPanel = document.createElement('div');
		menuPanel.id = 'menu-panel';
		menuPanel.className = 'hiden';
		document.body.appendChild(menuPanel);
		menuPanel.innerHTML = `<h1>Menu</h1>`;
		
		const menuLink1 = document.createElement('div');
		menuLink1.className = 'menu-link';
		menuPanel.appendChild(menuLink1);
		menuLink1.innerHTML = `${t('See brochure')}`;
		menuLink1.addEventListener(
			'click',
			() => {
				this._brochureModal.show()
			},
			false
		);

		const menuLink2 = document.createElement('div');
		menuLink2.className = 'menu-link';
		menuPanel.appendChild(menuLink2);
		menuLink2.innerHTML = `${t('Navigation Controls')}`;
		menuLink2.addEventListener(
			'click',
			() => {
				this._navigationInfoModal.show()
			},
			false
		);

		const menuLink3 = document.createElement('div');
		menuLink3.className = 'menu-link';
		menuPanel.appendChild(menuLink3);
		menuLink3.innerHTML = `<div class='icon-toggle-on'></div>${t('Show placard')}`;
		menuLink3.addEventListener(
			'click',
			() => {
				if (!this._isPlacardActived) {
					menuLink3.innerHTML = `<div class='icon-toggle-on'></div>${t('Show placard')}`;
				} else {
					menuLink3.innerHTML = `<div class='icon-toggle-off'></div>${t('Hide placard')}`;
				}
				this._isPlacardActived = !this._isPlacardActived;
			},
			false
		);

		const controlButtom = document.createElement('div');
		controlButtom.id = 'menu-control-buttom';
		controlButtom.className = 'icon-menu';
		controlsBar?.appendChild(controlButtom);
		controlButtom.addEventListener(
			'click',
			() => {
				menuPanel.classList.remove('hiden');
			},
			false
		);
		controlButtom.addEventListener(
			'pointerleave',
			() => {
				setTimeout(function () {
					menuPanel.className = 'hiden';
				}, 1500);
			},
			false
		);
	}
	public get isPlacardActived() {
		return this._isPlacardActived;
	}
	public get navigationInfoModal() {
		return this._navigationInfoModal;
	}
	public get brochureModal() {
		return this._brochureModal;	
	}
}
