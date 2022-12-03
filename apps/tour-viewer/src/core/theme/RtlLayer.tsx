import React from 'react';

import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';


type RtlLayerProps = {
	children?: React.ReactNode;
};

// Create rtl cache
const cacheRtl = createCache({
	key: 'muirtl',
	stylisPlugins: [prefixer, rtlPlugin],
});


export const RtlLayer: React.FC<RtlLayerProps> = function RtlLayer(_p) {
	return document.dir === 'rtl' ?
		<CacheProvider value={cacheRtl}>{_p.children}</CacheProvider>
		:
		<>{_p.children}</>;
};
