// src/ProtectedRoute.tsx

import React from 'react';
import {Navigate, Outlet, useLocation} from 'react-router-dom';

type ProtectedRouteProps = {
    isAuthenticated: boolean; // 这里用一个布尔值代替了用户认证状态
    redirectPath?: string; // 认证失败时重定向的路径，默认为"/login"
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
                                                           isAuthenticated,
                                                           redirectPath = '/login',
                                                       }) => {
    const location = useLocation();

    if (!isAuthenticated) {
        // 重定向到登录页，并传递当前位置，以便登录后可以重定向回来
        return <Navigate to={redirectPath} state={{from: location}} replace/>;
    }

    return <Outlet/>; // 正常渲染子组件
};

export default ProtectedRoute;
