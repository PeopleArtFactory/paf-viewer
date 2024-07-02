import {
	AmbientLight,
	BoxGeometry,
	CylinderGeometry,
	Mesh,
	MeshStandardMaterial,
	Object3D,
	SpotLight
} from 'three';

export function setAmbientLight(color: string = 'white', intensity: number = 2) {
	return new AmbientLight(color, intensity);
}

export function addSpotLight(
	boxColor: string,
	lightColor: string,
	intensity: number,
	distance: number,
	angle: number,
	penumbra: number,
	decay: number,
	target: Object3D
) {
	const spotLight = new SpotLight(lightColor, intensity, distance, angle, penumbra, decay);
	spotLight.position.set(0, 50, 50);
	spotLight.target = target;
	const geometry = new BoxGeometry(5, 12, 20);
	const material = new MeshStandardMaterial({
		color: boxColor
	});
	const spotLightBox = new Mesh(geometry, material);
	spotLightBox.rotateX(-Math.PI / 6);
	const lightCone = new Mesh(
		new CylinderGeometry(3, 1, 4),
		new MeshStandardMaterial({ color: lightColor })
	);
	lightCone.position.set(0, 0, -9);
	lightCone.rotateX(-Math.PI / 2);
	spotLightBox.add(lightCone, spotLight);
	spotLightBox.userData.type = 'spotLight';

	return spotLightBox;
}
