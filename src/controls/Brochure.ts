import Modal from './Modal';
import GalleryScene from '../Scene';

export default class BrochureModal {
	private _modal: Modal= new Modal('brochure-modal', this._closeCallbackFunction);
	constructor() {
		const galleryData = GalleryScene.instance.galleryData;
		if (!galleryData ) return; 
        const avatarUrl= galleryData.allResources[0].url
		const modalTitle = document.createElement('h3');
		modalTitle.innerText = galleryData.name;
		this._modal.header.appendChild(modalTitle);
		let innerHTML = `
        <div id='brochure-body'>
        <img src='${avatarUrl}'/>
		<div>	
			<p><strong>${galleryData.synopsis}</strong></p>
       		<p>${galleryData.description}</p>
			<p><br>`;
			galleryData.galleryTags.forEach(tag=>{
				innerHTML +=`<small class='brochure-tag' >${tag}</small>`
			})
        innerHTML +=`</p></div></div>`;
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
