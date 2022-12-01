import React from 'react';

type I18nProviderProps = {
  children?: React.ReactNode;
};

export const I18nProvider: React.FC<I18nProviderProps> = (_p) => {
  return <div>{_p.children}</div>;
};
