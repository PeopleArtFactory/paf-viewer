import { Resource } from './@types/Resource';
import { Audio, Texture } from 'three';

declare class ResourceManager {
    private static _instance;
    static get instance(): ResourceManager;
    private _imageResources;
    getImageResource(id: string): Texture | undefined;
    getImageResourcesSize(): number;
    private _audioResources;
    getAudioResource(id: string): Audio | undefined;
    getAudioResourcesSize(): number;
    constructor();
    load: (allResources: Resource[]) => void;
    private _loadImageResources;
    private _loadVideoResources;
    private _loadAudioResources;
}
export default ResourceManager;
