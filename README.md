# PAF 3D VIEWER
Open Source 3D Viewer developed just using TypeScript & Three.js (WebGL). You can download yours virtual galleries from [PeopleArtFactory.com](https://PeopleArtFactory.com) and host it in any web server, whenever you want and just for free.


### 🔗  [Learn More ](https://docs.peopleartfactory.com/)

## Usage

1. Create your virtual galleries in PeopleArtFactory.com and, when these will be ready to be published, download a zip file of each one, with all resources and a data.json file.

2. Install the 'paf-viewer' package in your terminal:

```javascript
npm install --save paf-viewer
```

3. Import the package, needed types and the CSS file in your project:

```javascript
import "./node_modules/paf-viewer/dist/style.css";
import { GalleryScene } from "paf-viewer";
//Typescript
import type { GalleryData, Resource } from "paf-viewer";
```

4. Update each resource URL with the new location of in your server:

```javascript
import galleryDataFile from "/YOUR ROUTE TO data.json";
if (galleryDataFile) {
  galleryDataFile.allResources.map((resource) => {
    resource.url = "/YOUR ROUTE TO FILES/" + resource.fileName;
  });
}
//Typescript
import galleryDataFile from "/YOUR ROUTE TO data.json";
const galleryData = galleryDataFile as GalleryData;
if (galleryData) {
  galleryData.allResources.map((resource: Resource) => {
    resource.url = "/YOUR ROUTE/" + resource.fileName;
  });
}
```

5. Create a new instance of the GalleryScene:

```javascript
const settings = { VIEWER_HIGHT: 190 } // (optional);
GalleryScene.instance.createRoom(galleryDataFile, settings);
```

## Setting Options (default values):
```javascript

    VIEWER_HIGHT: 175,
    POINTER_SLOW_SPEED_RANGE: 100,
    POINTER_SLOW_SPEED_CORRECTION_FACTOR: 0.5,
    POINTER_FAST_SPEED_CORRECTION_FACTOR: 10,
    POINTER_ROTATION_RANGE: 30,
    POINTER_ROTATION_CORRECTION_FACTOR: 100,
    KEYS_ARROWS_SPEED: 10,
    WHEEL_RANGE: 90,
    WHEEL_CORRECTION_FACTOR: 15,

    THETA_FACTOR: 20,
    TRANSLATION_SPEED: 30,
    FAST_TRANSLATION_SPEED: 60,
    FAST_TRANSLATION_RANGE: 500,
    ZOOM_SPEED: 1.5,
    PHI_SPEED: 0.8,
    THETA_SPEED: 0.4,
    COLLISION_DISTANCE:20,
    MIN_END_DISTANCE: 30,
    MAX_END_DISTANCE: 250,

    INITIAL_POSITION: [number, number, number];
    START_MODAL: "none" | "navigation-info" | "brochure"; 
    HIGH_PERFORMANCE: true; // Switch off all Spot Lights and Shadows.
```
## Authors

- [@peopleartfactory](https://github.com/peopleartfactory)

## License

### MIT

## Acknowledgements

Proud to be with the best people on Earth.

- [Three.js](https://threejs.org/)
- [Vite](https://vitejs.dev/)
