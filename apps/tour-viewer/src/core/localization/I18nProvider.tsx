type I18nProviderProps = {
  children?: React.ReactNode;
};

export const I18nProvider: React.FC<I18nProviderProps> = _p => {
  return (
    <div>
      <p>I18n provider works.</p>
      {_p.children}
    </div>
  );
};
