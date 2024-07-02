import { MediaPlayer } from '../@types/MediaPlayer';
import GalleryScene from '../Scene';
import Modal from './Modal';

export default class VideoPlayer {
	constructor(playerData: MediaPlayer) {
		const { source, id } = playerData;
		let stopFunction: Function;
		const modal = new Modal(`video-player-modal-${id}`, () => {
			stopFunction();
		});
		const loop=playerData.loop?1:0;
		const playerCover = document.createElement('div');
		playerCover.id = 'video-player';
		modal.body.appendChild(playerCover);
		playerCover.style.width = '80vw';
		playerCover.style.height = '80vh';
		const player = document.createElement('div');
		player.style.width = '100%';
		player.style.height = '100%';
		player.style.position = 'relative';
		player.style.zIndex = '-10';
		playerCover.appendChild(player);

		if (source === 'youTube' && id) {
			player.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${id}?autoplay=1&controls=0&showinfo=0&rel=0&loop=${loop}&playlist=${id}" frameborder="0" allow="fullscreen; autoplay; encrypted-media" allowfullscreen/>`;
		}
		modal.show();
		GalleryScene.instance.isModalOpen = true;
		stopFunction = () => {
			const playerDiv = document.getElementById(`video-player-modal-${id}`);
			if (playerDiv) playerDiv.remove();
			GalleryScene.instance.isModalOpen = false;
		};
	}
}
