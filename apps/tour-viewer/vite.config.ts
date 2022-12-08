import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { vitePwaConfig } from './pwa/vite-pwa-config';
import { rollupReplaceConfig } from './pwa/rollup-replace-config';

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
		}),
		vitePwaConfig(),
		rollupReplaceConfig()
	],
	publicDir: './src/assets'
});
