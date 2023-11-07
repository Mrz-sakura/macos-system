// Dock.tsx
import React from 'react';
import styles from './Dock.module.scss';

const Dock: React.FC = () => {
    return <div className={styles.dock}>
        <div>Dock Item 1</div>
        <div>Dock Item 2</div>
    </div>;
};

export default Dock;
