import { ManifestOptions, VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

export const vitePwaConfig = () => {
	const pwaOptions: Partial<VitePWAOptions> = {
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
			enabled: process.env.SW_DEV === 'true',
			/* when using generateSW the PWA plugin will switch to classic */
			type: 'module',
			navigateFallback: 'index.html',
		},
	};

	const claims = true;
	const selfDestroying = true;

	pwaOptions.srcDir = 'src';
	pwaOptions.filename = claims ? 'claims-sw.ts' : 'prompt-sw.ts';
	pwaOptions.strategies = 'injectManifest';
	(pwaOptions.manifest as Partial<ManifestOptions>).name = 'PWA Inject Manifest';
	(pwaOptions.manifest as Partial<ManifestOptions>).short_name = 'PWA Inject';

	if (claims) pwaOptions.registerType = 'autoUpdate';

	if (selfDestroying) pwaOptions.selfDestroying = selfDestroying;

	return VitePWA(pwaOptions);
};