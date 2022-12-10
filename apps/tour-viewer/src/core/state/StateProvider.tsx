import React, { useEffect } from 'react';
import { RecoilRoot, useRecoilSnapshot } from 'recoil';

type StateProviderProps = {
	children?: React.ReactNode;
};

export const StateProvider: React.FC<StateProviderProps> = (_p) => {
	return (
		<RecoilRoot>
			<DebugObserver />
			{_p.children}
		</RecoilRoot>
	);
};

function DebugObserver() {
	const snapshot = useRecoilSnapshot();
	useEffect(() => {
		console.debug('--- ATOMS MODIFIED ---');
		for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
			console.debug(node.key, snapshot.getLoadable(node).contents);
		}
		console.debug('----------------------');
	}, [snapshot]);

	return null;
}
