import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		viteStaticCopy({
			targets: [
				{
					src: 'assets',
					dest: './',
				},
			],
		}),],
	publicDir: './src/assets'
});
