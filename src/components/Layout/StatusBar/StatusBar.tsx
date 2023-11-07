import React from 'react';
import styles from './StatusBar.module.scss';
import {useStores} from "../../../pkg/store/StoreContext.tsx";

interface StatusBarProps {

}

const StatusBar: React.FC<StatusBarProps> = () => {
    const {statusBarStore} = useStores()

    return (
        <div className={styles.statusBar}>
            <div className={styles.statusBarItem}>{statusBarStore.time}</div>
            <div className={styles.statusBarItem}>
                {statusBarStore.wifiConnected ? 'WiFi Connected' : 'No WiFi'}
            </div>
            <div className={styles.statusBarItem}>Battery: {statusBarStore.batteryLevel}%</div>
            {/* 添加更多状态信息... */}
        </div>
    );
};

export default StatusBar;
