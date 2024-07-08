import { Resource } from './@types/Resource';
import { Audio, Texture } from 'three';

declare class ResourceManager {
    private static _instance;
    private _imageResources;
    private _audioResources;
    constructor();
    load: (allResources: Resource[]) => void;
    private _loadImageResources;
    private _loadAudioResources;
    static get instance(): ResourceManager;
    getImageResource(id: string): Texture | undefined;
    getAudioResource(id: string): Audio | undefined;
    getAudioResourcesSize(): number;
}
export default ResourceManager;
