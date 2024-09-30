import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
    plugins: [
        vue(),
        vueJsx({
            babelPlugins: [
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                ['@babel/plugin-proposal-class-properties', { loose: true }]
            ]
        }),
    ],css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "vuetify/styles" as *;`,
            },
        },
    },
});
