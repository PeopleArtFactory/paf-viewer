import Wall from './Wall';
import Frame from './Frame';
interface SpotLight {
	color: string ; //RGB component of the color of the ambient light
	intensity: number; // Numeric value of the light's strength/intensity. Default is 1.
	distance: number; //Maximum range of the light. Default is 0 (no limit).
	angle: number; //Maximum angle of light dispersion from its direction whose upper bound is Math.PI/2.
	penumbra: number; //Penumbra is the size of the light's shadow. Default is 0 (no shadow).
	decay: number; //Decay is the rate at which the light's intensity diminishes. Default is 1.
}
interface Lights {
	ambientLight: {
		color: string ; //RGB component of the color of the ambient light
		intensity: number; // Numeric value of the light's strength/intensity. Default is 1.
	};
	spotLights?: SpotLight[];
}
export default interface Room {
	ceiling: {
		color: string;
		backgroundImageId?: string;
	};
	floor: {
		color: string;
		backgroundImageId?: string;
	};
	lights: Lights;
	walls: Wall[];
	frames?: Frame[];
	generalAudioId?: string;
}
