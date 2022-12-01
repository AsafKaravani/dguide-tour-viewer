import React from 'react'; // we need this to make JSX compile

type GlobalProvidersProps = {
  title: string;
  children?: React.ReactNode;
};

export const GlobalProviders: React.FC<GlobalProvidersProps> = React.forwardRef<HTMLDivElement, GlobalProvidersProps>((_p, ref) => {
  return (
    <div ref={ref}>
      <p>{_p.title}</p>
      {_p.children}
    </div>
  );
});
