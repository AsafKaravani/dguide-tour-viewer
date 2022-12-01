import { createTheme, Shadows, ThemeProvider } from "@mui/material";
import * as colors from "@mui/material/colors";

type ThemeProviderProps = {
  children?: React.ReactNode;
};

const theme = createTheme({
  shadows: Array(25).fill("none") as Shadows,
  palette: {
    primary: {
      main: '#E14A1B'
    }
  }
});

export const AppThemeProvider: React.FC<ThemeProviderProps> = _p => {
  return (
    <ThemeProvider theme={theme}>
      {_p.children}
    </ThemeProvider>
  );
};

