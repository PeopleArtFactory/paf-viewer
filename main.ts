//To try builded library:
import "./dist/style.css";
import { GalleryScene } from "./dist/paf-viewer";
import type { GalleryData, Resource } from "./dist/paf-viewer";

//To editing the library:
//import '/src/style.css';
//import  GalleryScene from './src/Scene';
//import type GalleryData from "./src/@types/GalleryData";
//import type Resource from "./src/@types/Resource";

import galleryDataFile from "./public/demo/data.json";

const galleryData = galleryDataFile as GalleryData;
if (galleryData) {
  galleryData.allResources.map((resource: Resource) => {
    resource.url = "demo/" + resource.fileName;
  });
}

GalleryScene.instance.createRoom(galleryData, { START_MODAL: "brochure" });
