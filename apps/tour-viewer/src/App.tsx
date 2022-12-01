import React from 'react';
import { GlobalProviders } from '@core/GlobalProviders';
import { Button, Typography } from '@mui/material';

function App() {
	return (
		<div className="App">
			<GlobalProviders>
				<Button variant="contained" color="error">
					{' '}
					asd
				</Button>
				<Button variant="contained"> asd</Button>
				<Typography variant="body1">asd</Typography>
				<Typography variant="caption">asd</Typography>
			</GlobalProviders>
		</div>
	);
}

export default App;
