import React from 'react';

type StateProviderProps = {
	children?: React.ReactNode;
};

export const StateProvider: React.FC<StateProviderProps> = (_p) => {
	return <div>{_p.children}</div>;
};
