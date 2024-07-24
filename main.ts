//To try builded library:
// import "./dist/style.css";
// import { GalleryScene } from "./dist/paf-viewer";
// import type { GalleryData } from "./dist/paf-viewer";

//To editing the library:
import '/src/style.css';
import  GalleryScene from './src/Scene';
import type GalleryData from "./src/@types/GalleryData";
import galleryDataFile from "./public/demo/data.json";

const galleryData = galleryDataFile as unknown as GalleryData;

if (galleryData) {
  galleryData.allResources.map((resource) => {
    resource.url = "demo/" + resource.fileName;
  });
}

GalleryScene.instance.load(galleryData, { START_MODAL: "navigation-info" });
