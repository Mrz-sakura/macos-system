import React from 'react';
import {observer} from 'mobx-react-lite';
import {useStores} from "../../pkg/store/StoreContext.tsx";
import styles from './WindowControls.module.scss';

interface WindowControlsProps {
    appName: string;
    onClose: () => void;
    onMinimize: () => void;
    onMaximize: () => void;
}

const WindowControls: React.FC<WindowControlsProps> = ({appName, onClose, onMinimize, onMaximize}) => {
    const {appStore} = useStores();

    const handleMinimize = () => {
        // 调用AppStore中的最小化操作
        appStore.minimizeApp(appName);

        // 调用父组件传递的最小化回调函数
        onMinimize();
    };

    const handleMaximize = () => {
        // 调用AppStore中的最大化操作
        appStore.maximizeApp(appName);

        // 调用父组件传递的最大化回调函数
        onMaximize();
    };

    const handleClose = () => {
        // 调用AppStore中的关闭操作
        appStore.closeApp(appName);

        // 调用父组件传递的关闭回调函数
        onClose();
    };

    return (
        <div className={styles.windowControls}>
            <div className={`${styles.control} ${styles.close}`} onClick={handleClose}></div>
            <div className={`${styles.control} ${styles.minimize}`} onClick={handleMinimize}></div>
            <div className={`${styles.control} ${styles.maximize}`} onClick={handleMaximize}></div>
        </div>
    );
};

export default observer(WindowControls);
