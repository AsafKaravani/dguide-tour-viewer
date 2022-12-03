import React from 'react';

import { createTheme, Shadows, ThemeProvider } from '@mui/material';

type ThemeProviderProps = {
	children?: React.ReactNode;
};

const theme = createTheme({
	shadows: Array(25).fill('none') as Shadows,
	palette: {
		primary: {
			main: '#F19A36',
		},
		secondary: {
			main: '#101639',
		}
	},
});


export const AppThemeProvider: React.FC<ThemeProviderProps> = (_p) => {
	return <ThemeProvider theme={theme}>{_p.children}</ThemeProvider>;
};
