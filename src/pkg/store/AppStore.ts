// AppStore.ts
import {makeAutoObservable} from "mobx";

class AppStore {
    background = "http://static.diffusenetwork.com/report/cherry-blossom-forest-snowy-mountain-scenery-starry-night-sky-ai-2k-wallpaper-uhdpaper.com-742%401%40l.jpg";
    theme = "light";

    constructor() {
        makeAutoObservable(this);
    }

    setBackground(image: string) {
        this.background = image;
    }

    setTheme(theme: string) {
        this.theme = theme;
    }
}

export default new AppStore();
