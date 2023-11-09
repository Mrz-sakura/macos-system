// Dock.tsx
import React from 'react';
import styles from './Dock.module.scss';
import MessagerIcon from '../../../assets/icon/messager.png'

const Dock: React.FC = () => {
    return <div className={styles.dock}>
        <div className={styles.dockWrap}>
            <div className={styles.dockItem}>
                <div className={styles.dockItemIcon}>
                    <img src="https://static.diffusenetwork.com/report/AppIcon%20104.png" alt=""/>
                </div>
                {/*<div className={styles.dockItemTitle}>Finder</div>*/}
            </div>
            <div className={styles.dockItem}>
                <div className={styles.dockItemIcon}>
                    <img src={MessagerIcon} alt=""/>
                </div>
                {/*<div className={styles.dockItemTitle}>Finder</div>*/}
            </div>
        </div>
    </div>;
};

export default Dock;
