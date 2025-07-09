import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({

    base: '/Atividade-Colorir/',
    plugins: [
        tailwindcss()
    ],
});