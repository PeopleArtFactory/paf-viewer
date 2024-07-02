import { MediaPlayer } from "./MediaPlayer";
export interface Resource {
	id: string;
	type: 'image' | 'background' | 'audio' | 'video' | 'ref';
	url: string;
	fileName?: string;
	fileSize?: number;
	group: string | number;
	disabled: boolean;
	info?: {
		name?: string | null;
		description?: string | null;
		realDimensions?: {
			showDimensions?: boolean;
			height?: number | null;
			width?: number | null;
			depth?: number | null;
		};
		price?: string;
		refUrl?: string;
	};
	mediaPlayer?: MediaPlayer
}
