export default interface Content {
	resourceId: string;
	position: number[];
	size:number[];
	rotation?: number[];
	frameIndex?: number;
	spotLight?: {
		spotLightIndex: number;
		position: number[];
	};
	audioId?: string;
	isVideo?: boolean;
}
