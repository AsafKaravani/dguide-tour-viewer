import { I18nProvider } from "./localization/I18nProvider";
import { StateProvider } from "./state/StateProvider";
import { ThemeProvider } from "./theme/ThemeProvider";

type GlobalProvidersProps = {
  children?: React.ReactNode;
};

export const GlobalProviders: React.FC<GlobalProvidersProps> = _p => {
  return (
    <ThemeProvider>
      <I18nProvider>
        <StateProvider>
          {_p.children}
        </StateProvider>
      </I18nProvider>
    </ThemeProvider>
  );
};
