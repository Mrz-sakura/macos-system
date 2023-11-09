import {action, makeObservable, observable} from 'mobx';

class AppStore {
    apps: Record<string, { isMinimized: boolean; isMaximized: boolean; isClosed: boolean }> = {};

    background = "http://static.diffusenetwork.com/report/cherry-blossom-forest-snowy-mountain-scenery-starry-night-sky-ai-2k-wallpaper-uhdpaper.com-742%401%40l.jpg";
    theme = "light";

    constructor() {
        makeObservable(this, {
            apps: observable,
            minimizeApp: action,
            maximizeApp: action,
            closeApp: action,
        });
    }

    initializeApp(appName: string) {
        this.apps[appName] = {
            isMinimized: false,
            isMaximized: false,
            isClosed: false,
        };
    }

    minimizeApp(appName: string) {
        this.apps[appName].isMinimized = true;
    }

    maximizeApp(appName: string) {
        this.apps[appName].isMaximized = true;
    }

    closeApp(appName: string) {
        this.apps[appName].isClosed = true;
    }

    setBackground(image: string) {
        this.background = image;
    }

    setTheme(theme: string) {
        this.theme = theme;
    }
}

export default new AppStore();
