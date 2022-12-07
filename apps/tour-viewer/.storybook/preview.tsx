import { themes } from '@storybook/theming';
import React from "react"
import '../src/index.css'

import { ThemeProvider } from "@mui/material/styles"
import { brandTheme } from '../src/core/theme/ThemeProvider';


export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}



export const decorators = [
	(story) => <ThemeProvider theme={brandTheme}>{story()}</ThemeProvider>
]
