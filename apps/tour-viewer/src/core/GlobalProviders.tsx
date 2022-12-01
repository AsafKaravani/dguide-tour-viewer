type GlobalProvidersProps = {
  children?: React.ReactNode;
};

export const GlobalProviders: React.FC<GlobalProvidersProps> = _p => {
  return (
    <div>
      <p>Global providers works.</p>
      {_p.children}
    </div>
  );
};
