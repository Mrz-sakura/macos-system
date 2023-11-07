// rootStore.ts
import UserStore from './UserStore.ts';
import AppStore from './AppStore.ts';
import StatusBarStore from "./StatusBarStore.ts";

class RootStore {
    userStore: typeof UserStore;
    appStore: typeof AppStore;
    statusBarStore: typeof StatusBarStore;

    constructor(userStore: typeof UserStore, appStore: typeof AppStore, statusBarStore: typeof StatusBarStore) {
        this.userStore = userStore;
        this.appStore = appStore;
        this.statusBarStore = statusBarStore
    }
}

const rootStore = new RootStore(UserStore, AppStore, StatusBarStore);

export default rootStore;
