import GalleryScene from '../Scene';
import Modal from './Modal';
import t from '../locale';
const linkUrl = window.location.href;
export default class ShareControl {
	constructor(controlsBar: HTMLElement) {
		const modal = new Modal('share-modal');
		const controlButtom = document.createElement('div');
		controlButtom.id = 'share-control-buttom';
		controlButtom.className = 'icon-share';
		controlsBar?.appendChild(controlButtom);
		controlButtom.addEventListener(
			'click',
			() => {
				modal.show();
			},
			false
		);

		const modalTitle = document.createElement('h3');
		modalTitle.innerText = t('Share gallery');
		modal.header.appendChild(modalTitle);

		const iframeText = document.createElement('p');
		iframeText.innerText = `<iframe width='100%' height='100vh' frameborder='0' src='${window.location.href}' allowfullscreen webkitallowfullscreen mozallowfullscreen />`;
		iframeText.setAttribute('style', 'display:inline-block;padding:10px;margin:5px');
		modal.body.appendChild(iframeText);

		const shareLinks = ['twitterx', 'whatsapp', 'facebook', 'linkedin', 'reddit', 'mail'];
		shareLinks.forEach((name: string) => {
			const linkButtom = document.createElement('div');
			linkButtom.className = 'icon-' + name;
			modal.footer.appendChild(linkButtom);
			linkButtom.addEventListener('click', eval('this._' + name + 'Handler'), false);
		});
	}
	_twitterxHandler() {
		const text = GalleryScene.instance.galleryData?.name;
		const tags = GalleryScene.instance.galleryData?.galleryTags.join(',');
		const apiUrl = 'https://twitter.com/intent/tweet?';
		window.open(
			`${apiUrl}text=${text}&url=${encodeURI(linkUrl)}&hashtags=${tags}&via=PeopleArtFty`,
			'_blank'
		);
	}
	_whatsappHandler() {
		const apiUrl = 'https://api.whatsapp.com/send/?';
		window.open(`${apiUrl}text=${encodeURI(linkUrl)}&type=custom_url&app_absent=0`, '_blank');
	}
	_facebookHandler() {
		const apiUrl = 'http://www.facebook.com/share.php?';
		window.open(`${apiUrl}u=${encodeURI(linkUrl)}`, '_blank');
	}
	_linkedinHandler() {
		const apiUrl = 'https://www.linkedin.com/sharing/share-offsite/?';
		window.open(`${apiUrl}url=${encodeURI(linkUrl)}`, '_blank');
	}
	_redditHandler() {
		const text = GalleryScene.instance.galleryData?.name;
		const apiUrl = 'https://www.reddit.com/submit?';
		window.open(`${apiUrl}title=${text}&url=${encodeURI(linkUrl)}`, '_blank');
	}
	_mailHandler() {
		const text = GalleryScene.instance.galleryData?.name;
		const synopsis = GalleryScene.instance.galleryData?.synopsis;
		const description = GalleryScene.instance.galleryData?.description;
		const apiUrl = 'mailto:?';
		window.open(
			`${apiUrl}subject=${text}&body=${encodeURI(
				linkUrl
			)}%0D%0A%0D%0A${synopsis}%0D%0A%0D%0A${description}`,
			'_blank'
		);
	}
}
