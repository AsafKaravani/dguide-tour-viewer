import React from 'react';

import { createTheme, Shadows, ThemeProvider } from '@mui/material';

type ThemeProviderProps = {
	children?: React.ReactNode;
};

export const brandTheme = createTheme({
	shadows: Array(25).fill('none') as Shadows,
	palette: {
		primary: {
			main: '#E14A1B',
		},
		secondary: {
			main: '#121A3E',
		},
	},
	typography: {
		allVariants: {
			fontFamily: 'rubik',
			color: '#3C3A36',
		},
		h1: {
			fontSize: 35,
			fontWeight: 400
		},
		h2: {
			fontSize: 20,
			fontWeight: 500
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
			textTransform: 'none',
			lineHeight: '20x'
		},
	},
	components: {
		MuiButton: {
			defaultProps: {
				variant: 'contained',
			},
			styleOverrides: {
				root: () => ({
					borderRadius: 99999,
					padding: '12px 32px'
				})
			}
		},
		MuiLink: {
			styleOverrides: {
				root: () => ({
					fontSize: 12,
					fontWeight: 500,
				})
			}
		}
	}
});


export const AppThemeProvider: React.FC<ThemeProviderProps> = (_p) => {
	return <ThemeProvider theme={brandTheme}>{_p.children}</ThemeProvider>;
};
