// auth.ts

type User = {
    username: string;
    // Define other user properties here
};

// 假设我们使用localStorage来保存登录状态
const IsAuthenticated = (): boolean => {
    const user = localStorage.getItem('user') || "zhangsan";

    return !!user; // '!!' 转换为布尔类型，如果user存在返回true, 否则返回false
};

const LoginUser = (username: string, password: string): boolean => {
    // 用假数据简化认证过程，请替换为实际的登录逻辑
    if (username === 'admin' && password === 'admin') {
        const user: User = {username};
        // 将用户信息保存在localStorage中
        localStorage.setItem('user', JSON.stringify(user));
        return true;
    }
    return false;
};

const LogoutUser = (): void => {
    // 清除用户信息以登出用户
    localStorage.removeItem('user');
};

// 获取当前登录用户的信息，这里也使用了假数据和简化逻辑
const GetCurrentUser = (): User | null => {
    const userJson = localStorage.getItem('user');
    if (userJson) {
        return JSON.parse(userJson) as User;
    }
    return null;
};

export {IsAuthenticated, LoginUser, LogoutUser, GetCurrentUser};
