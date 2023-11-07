// statusBarStore.ts
import {makeAutoObservable} from 'mobx';

class StatusBarStore {
    time = '12:00 AM';
    batteryLevel = 100;
    wifiConnected = true;

    constructor() {
        makeAutoObservable(this);
        this.updateTime();
    }

    updateTime() {
        setInterval(() => {
            this.time = new Date().toLocaleTimeString();
        }, 1000); // 每秒更新时间
    }

    setBatteryLevel(level: number) {
        this.batteryLevel = level;
    }

    toggleWifi(connected: boolean) {
        this.wifiConnected = connected;
    }
}

const statusBarStore = new StatusBarStore();
export default statusBarStore;
