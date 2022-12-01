type ThemeProviderProps = {
  children?: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = _p => {
  return (
    <div>
      <p>Theme provider works.</p>
      {_p.children}
    </div>
  );
};
