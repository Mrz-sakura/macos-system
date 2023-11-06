// src/pages/Dashboard.tsx

import React from 'react';
import {useParams} from 'react-router-dom';
import styles from "./index.module.scss"

// 如果Dashboard有特定的prop类型，你可以在这里定义
interface DashboardProps {
    // 定义你的props类型
}

// Dashboard组件
const Dashboard: React.FC<DashboardProps> = () => {
    // 使用useParams钩子获取路由参数
    const {id} = useParams<{ id: string }>();

    return (
        <div className={styles.button}>
            <h1>Dashboard</h1>
            {id && <p>查看的详细ID: {id}</p>}
            <div>点击我</div>
            {/* 在这里添加更多的dashboard逻辑和渲染 */}
        </div>
    );
};

export default Dashboard;
