import React from 'react';
import { I18nProvider } from '@app/core/localization/I18nProvider';
import { StateProvider } from '@app/core/state/StateProvider';
import { AppThemeProvider } from '@app/core/theme/ThemeProvider';

type GlobalProvidersProps = {
	children?: React.ReactNode;
};

export const GlobalProviders: React.FC<GlobalProvidersProps> = (_p) => {
	return (
		<AppThemeProvider>    {/** 🎨 Theme Layer */}
			<I18nProvider>      {/** 🌎 I18n Layer */}
				<StateProvider>   {/** 🧠 State Layer */}
					{_p.children}
				</StateProvider>
			</I18nProvider>
		</AppThemeProvider>
	);
};
