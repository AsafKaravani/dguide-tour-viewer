import { I18nProvider } from "./localization/I18nProvider";
import { StateProvider } from "./state/StateProvider";
import { AppThemeProvider } from "./theme/ThemeProvider";

type GlobalProvidersProps = {
  children?: React.ReactNode;
};

export const GlobalProviders: React.FC<GlobalProvidersProps> = _p => {
  return (
    <AppThemeProvider>
      <I18nProvider>
        <StateProvider>
          {_p.children}
        </StateProvider>
      </I18nProvider>
    </AppThemeProvider>
  );
};
