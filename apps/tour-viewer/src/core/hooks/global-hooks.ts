import { useTheme } from '@mui/material';

export function useGlobalHooks() {
	const theme = useTheme();

	return {
		theme,
	};
}
