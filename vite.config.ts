// vite.config.ts

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {resolve} from 'path'; // 引入resolve函数处理路径

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "${resolve(__dirname, 'src/assets/styles/variables.scss')}";`, // 引入全局变量
            },
        },
    },
});
