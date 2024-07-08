import Room from './Room';
import {Resource} from './Resource';
export default interface GalleryData {
	id: string;
	alias: string;
	name: string;
	synopsis: string;
	description?: string;
	dateCreated: Date | string;
	dateUpdated?: Date | string;
	galleryTags: string[];
	links?: string[];
	room: Room;
	allResources: Resource[];
	options: {
		disableHumanRef: boolean;
		hideLogo: boolean;
	};
}
