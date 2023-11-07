// Layout.tsx
import React, {ReactNode} from 'react';
import StatusBar from './StatusBar'; // 引入StatusBar组件
import Dock from './Dock'; // 引入Dock组件
import styles from './Layout.module.scss';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div className={styles.layout}>
            <div className={styles.statusBarContainer}>
                <StatusBar/>
            </div>
            <div className={styles.contentContainer}>
                {children}
            </div>
            <div className={styles.dockContainer}>
                <Dock/>
            </div>
        </div>
    );
};

export default Layout;
