// userStore.ts
import {makeAutoObservable} from "mobx";

class UserStore {
    userInfo = {name: "", email: ""};

    constructor() {
        makeAutoObservable(this);
    }

    setUserInfo(name: string, email: string) {
        this.userInfo.name = name;
        this.userInfo.email = email;
    }
}

export default new UserStore();
