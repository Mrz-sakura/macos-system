// src/routes.tsx

import React from 'react';
import DashboardPage from '../../apps/Dashboard';

export interface RouteConfig {
    path: string;
    element?: React.ReactNode; // element可能不存在，因为重定向的路由不渲染组件
    redirect?: string; // 添加一个可选的重定向字段
    meta?: {
        name: string;
        requiresAuth?: boolean;
    };
    children?: RouteConfig[];
}

const routes: RouteConfig[] = [
    {
        path: '/', // 当访问根路径时
        redirect: '/dashboard', // 重定向到/dashboard
    },
    {
        path: '/dashboard',
        element: <DashboardPage/>,
        meta: {name: 'Dashboard', requiresAuth: true},
        children: [
            {
                path: 'overview/:id',
                element: <div>Overview</div>,
                meta: {name: 'Overview', requiresAuth: true},
            }
        ]
    },
];

export default routes;
