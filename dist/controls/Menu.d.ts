import { default as NavigationInfoModal } from './NavigationInfo';
import { default as BrochureModal } from './Brochure';

export default class Menu {
    private _isPlacardActived;
    private _isHightPerformance;
    private _navigationInfoModal;
    private _brochureModal;
    constructor(controlsBar: HTMLElement);
    get isPlacardActived(): boolean;
    setHightPerformance(value: boolean): void;
    get navigationInfoModal(): NavigationInfoModal;
    get brochureModal(): BrochureModal;
}
