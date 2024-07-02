
# PAF 3D VIEWER

Open Source 3D Viewer made in TypeScript, just using Three.js. 
You can download yours virtual galleries from [PeopleArtFactory.com](https://github.com/peopleartfactory) and host it in  any web server, whenever you want and just for free.

## Usage

1. Create and download your virtual galleries from PeopleArtFactory.com 

2. Copy the 'dist' folder in your web server.

```
import './dist/style.css';
import { GalleryScene} from './dist/paf-viewer';

import galleryDataFile from '/YOUR ROUTE TO data.json' 

// Update  
if (galleryDataFile) {
	galleryDataFile.allResources.map((resource) => {
		resource.url = '/YOUR ROUTE TO FILES/' + resource.fileName;
	});
}

GalleryScene.instance.createRoom(galleryDataFile);
```
## Setting:

    "CAMARA_FOV": 45,
    "CAMARA_NEAR": 0.1,
    "CAMARA_FAR": 10000,
    "VIEWER_HIGHT": 170,

    "POINTER_SLOW_SPEED_RANGE": 75,
    "POINTER_SLOW_SPEED_CORRECTION_FACTOR": 2,
    "POINTER_FAST_SPEED_CORRECTION_FACTOR": 10,
    "POINTER_ROTATION_RANGE": 30,
    "POINTER_ROTATION_CORRECTION_FACTOR": 100,
    "KEYS_ARROWS_SPEED": 10,
    "WHEEL_RANGE": 90,
    "WHEEL_CORRECTION_FACTOR": 15,

    "THETA_FACTOR": 20, 
    "TRANSLATION_SPEED": 30,
    "FAST_TRANSLATION_SPEED": 60,
    "FAST_TRANSLATION_RANGE": 500,
    "ZOOM_SPEED": 1.5,
    "PHI_SPEED": 0.8,
    "THETA_SPEED": 0.4,
    "COLLISION_DISTANCE":40,
    "MIN_END_DISTANCE": 50, 
    "MAX_END_DISTANCE": 300
## Authors

- [@peopleartfactory](https://github.com/peopleartfactory)


## Acknowledgements

Proud to be with the best people on Earth.
 - [Three.js](https://threejs.org/)

