import { ManifestOptions, VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

export const vitePwaConfig = () => {
	const pwaOptions: Partial<VitePWAOptions> = {
		workbox: {
			sourcemap: true
		},
		registerType: 'autoUpdate',
		mode: 'development',
		base: '/',
		devOptions: {
			enabled: true,
			/* when using generateSW the PWA plugin will switch to classic */
			type: 'module',
		},
	};

	return VitePWA();
};

/**
 * 		workbox: {
			sourcemap: true
		},	
		mode: 'development',
		base: '/',
		includeAssets: ['favicon.svg'],
		manifest: {
			name: 'PWA Router',
			short_name: 'PWA Router',
			theme_color: '#ffffff',
			icons: [
				{
					src: 'pwa-192x192.png', // <== don't add slash, for testing
					sizes: '192x192',
					type: 'image/png',
				},
				{
					src: '/pwa-512x512.png', // <== don't remove slash, for testing
					sizes: '512x512',
					type: 'image/png',
				},
				{
					src: 'pwa-512x512.png', // <== don't add slash, for testing
					sizes: '512x512',
					type: 'image/png',
					purpose: 'any maskable',
				},
			],
		},
		devOptions: {
			enabled: true,
			/* when using generateSW the PWA plugin will switch to classic /
			type: 'module',
			navigateFallback: 'index.html',
		},
 */