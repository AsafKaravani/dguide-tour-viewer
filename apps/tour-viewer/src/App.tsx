import React from 'react';
import { GlobalProviders } from '@app/core/GlobalProviders';
import { RoutingLayer } from '@app/core/routing/RoutingLayer';


function App() {
	return (
		<div className="App">
			<GlobalProviders>
				<RoutingLayer />
			</GlobalProviders>
		</div>
	);
}

export default App;
