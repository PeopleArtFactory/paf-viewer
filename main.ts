import './dist/style.css';

//To try builded library:
import { GalleryScene} from './dist/paf-viewer';

//To editing the library:
//import  GalleryScene from './src/Scene';
import galleryDataFile from './public/demo/data.json' 


if (galleryDataFile) {
	galleryDataFile.allResources.map((resource) => {
		resource.url = 'demo/' + resource.fileName;
	});
}

GalleryScene.instance.createRoom(galleryDataFile);
