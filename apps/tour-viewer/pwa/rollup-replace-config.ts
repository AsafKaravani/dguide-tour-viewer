import replace, { RollupReplaceOptions } from '@rollup/plugin-replace';

export const rollupReplaceConfig = () => {
	const replaceOptions: RollupReplaceOptions = {
		__DATE__: new Date().toISOString()
	};
	const reload = process.env.RELOAD_SW === 'true';

	if (reload) {
		replaceOptions.__RELOAD_SW__ = 'true';
	}

	return replace(replaceOptions);
};