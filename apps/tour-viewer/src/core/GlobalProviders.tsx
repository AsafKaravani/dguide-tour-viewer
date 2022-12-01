import { I18nProvider } from "./localization/I18nProvider";
import { StateProvider } from "./state/StateProvider";
import { AppThemeProvider } from "./theme/ThemeProvider";

type GlobalProvidersProps = {
  children?: React.ReactNode;
};

export const GlobalProviders: React.FC<GlobalProvidersProps> = _p => {
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
