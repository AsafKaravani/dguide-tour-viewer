type StateProviderProps = {
  children?: React.ReactNode;
};

export const StateProvider: React.FC<StateProviderProps> = _p => {
  return (
    <div>
      <p>State provider works.</p>
      {_p.children}
    </div>
  );
};
