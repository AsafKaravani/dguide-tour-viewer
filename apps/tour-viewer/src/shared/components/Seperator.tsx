import { Box, BoxProps } from '@mui/system';
import React from 'react';

export const Seperator: React.FC<BoxProps> = React.memo(function Seperator(_p) {
	return (
		<Box {..._p}>
			<div className="h-px w-full bg-black opacity-20 my-4"></div>
		</Box>
	);
});
