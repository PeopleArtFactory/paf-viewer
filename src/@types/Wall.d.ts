import Content from './Content';
export default interface Wall {
	position: number[];
	size: number[];
	angle: number;
	color: string;
	backgroundPatternId?: string|null;
	backgroundImageId?: string|null;
	audioId?: string;
	contents?: Content[];
}



