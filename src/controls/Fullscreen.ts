export default class FullScreenControl {
	constructor(controlsBar:HTMLElement) {
		const controlButtom = document.createElement('div');
		controlButtom.id = 'fullscreen-control-buttom';
		controlButtom.className = 'icon-maximize';
		controlsBar?.appendChild(controlButtom);
		controlButtom.addEventListener(
			'click',
			() => {
				if (!document.fullscreenElement) {
					document.documentElement.requestFullscreen();
				} else if (document.exitFullscreen) {
					document.exitFullscreen();
				}
			},
			false
		);

		document.addEventListener('fullscreenchange', () => {
			if (document.fullscreenElement) {
				controlButtom.className = 'icon-minimize';
			} else {
				controlButtom.className = 'icon-maximize';
			}
		});
	}

}

