import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, './src'),
            "icons": path.resolve(__dirname, './src/shared/assets/icons'),
            // "@/shared": path.resolve(__dirname, './src/shared'),
            // "@/shared": path.resolve(__dirname, './src/shared/assets'),
            // "@/icons": path.resolve(__dirname, './src/shared/assets/icons'),
            // "@/components/": path.resolve(__dirname, './src/components'),
        }
    },
    server: {
        port: 3000,
    },
    preview:{
        port:3000
    }
    // css: {
    //     modules: {
    //         localsConvention: 'camelCaseOnly',
    //     },
    // },
})
