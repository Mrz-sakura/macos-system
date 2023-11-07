// rootStore.ts
import UserStore from './UserStore.ts';
import AppStore from './AppStore.ts';

class RootStore {
    userStore: typeof UserStore;
    appStore: typeof AppStore;

    constructor(userStore: typeof UserStore, appStore: typeof AppStore) {
        this.userStore = userStore;
        this.appStore = appStore;
    }
}

const rootStore = new RootStore(UserStore, AppStore);

export default rootStore;
