// src/App.tsx

import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import routes, {RouteConfig} from './routes'; // 引入路由配置
import ProtectedRoute from './ProtectedRoute';
import {IsAuthenticated} from '../utils/auth'; // 引入认证检查函数

// 递归函数渲染路由和子路由
const renderRoutes = (routes: RouteConfig[]) => {
    return routes.map((route, index) => {
        if (route.redirect) {
            // 如果route有重定向字段，就创建一个重定向路由
            return <Route key={index} path={route.path} element={<Navigate to={route.redirect} replace/>}/>;
        }
        // 存在子路由时，递归调用renderRoutes来渲染
        const childRoutes = route.children ? renderRoutes(route.children) : null;
        // 如果当前路由需要认证，则通过ProtectedRoute来保护
        if (route.meta?.requiresAuth) {
            return (
                <Route key={index} path={route.path} element={<ProtectedRoute isAuthenticated={IsAuthenticated()}/>}>
                    {/* 渲染父路由的默认元素 */}
                    <Route index element={route.element}/>
                    {/* 渲染子路由 */}
                    {childRoutes}
                </Route>
            );
        } else {
            // 不需要认证的路由，直接渲染父路由和子路由
            return (
                <Route key={index} path={route.path} element={route.element}>
                    {childRoutes}
                </Route>
            );
        }
    });
};

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* 渲染所有顶层路由及其子路由 */}
                {renderRoutes(routes)}
            </Routes>
        </Router>
    );
};

export default AppRouter;
