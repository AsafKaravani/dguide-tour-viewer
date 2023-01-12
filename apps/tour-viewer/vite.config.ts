/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { viteStaticCopy } from 'vite-plugin-static-copy';
//@ts-ignore
import { vitePwaConfig } from './src/core/pwa/vite-pwa-config';
//@ts-ignore
import { rollupReplaceConfig } from './src/core/pwa/rollup-replace-config';
import { VitePWA } from 'vite-plugin-pwa';
//@ts-ignore

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
		VitePWA({
			registerType: 'autoUpdate',
			mode: 'development',
			base: '/',
			workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,svg,ttf,woff2,jpg*}'],
				runtimeCaching: [
					{
						urlPattern: () => true,
						handler: 'StaleWhileRevalidate',
						options: {
							cacheName: 'api-cache',
							cacheableResponse: {
								statuses: [200]
							}
						},
					},
					{
						urlPattern: () => true,
						handler: 'NetworkFirst',
						method: 'POST',
						options: {
							cacheName: 'api-cache-post',
							cacheableResponse: {
								statuses: [200]
							}
						},
					}]
			},
			devOptions: {
				enabled: true,
				type: 'module'
			}
		}),
		rollupReplaceConfig(),
	],
	publicDir: './src/assets',
});
