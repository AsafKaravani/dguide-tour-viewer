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
		},
	},
	typography: {
		allVariants: {
			fontFamily: 'rubik',
			color: '#3C3A36',
		},
		h1: {
			fontSize: '35px',
			fontWeight: 400
		},
		caption: {
			fontSize: 12,
			fontWeight: 500,
			color: '#858585'
		},
		body1: {
			fontSize: 15,
			fontWeight: 500
		},
		body2: {
			fontSize: 14,
			fontWeight: 400
		},
		button: {
			fontSize: 16,
			fontWeight: 500,
			textTransform: 'none'
		}
	}
});


export const AppThemeProvider: React.FC<ThemeProviderProps> = (_p) => {
	return <ThemeProvider theme={theme}>{_p.children}</ThemeProvider>;
};
