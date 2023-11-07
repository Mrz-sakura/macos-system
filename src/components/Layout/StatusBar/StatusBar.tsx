import React from 'react';
import styles from './StatusBar.module.scss';
import {useStores} from "../../../pkg/store/StoreContext.tsx";
import {Apple} from "@icon-park/react";

interface StatusBarProps {

}

const StatusBar: React.FC<StatusBarProps> = () => {
    const {statusBarStore} = useStores()

    return (
        <div className={styles.statusBar}>
            <div className={styles.appContextMenu}>
                <div className={styles.appStatusLogo}>
                    <Apple theme="filled" size="18" fill="#fff"/>
                </div>
                <div className={styles.appContextMenuName}>WebStorm</div>
                <div className={styles.appContextMenuItem}>文件</div>
                <div className={styles.appContextMenuItem}>编辑</div>
            </div>
            <div className={styles.appStatusMenu}>
                <div className={styles.statusBarItem}>{statusBarStore.time}</div>
                <div className={styles.statusBarItem}>
                    {statusBarStore.wifiConnected ? 'WiFi Connected' : 'No WiFi'}
                </div>
                <div className={styles.statusBarItem}>Battery: {statusBarStore.batteryLevel}%</div>
                {/* 添加更多状态信息... */}
            </div>
        </div>
    );
};

export default StatusBar;
