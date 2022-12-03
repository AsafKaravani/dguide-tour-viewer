import React from 'react';
import { Box, Typography } from '@mui/material';
import { Seperator } from '@app/shared/components';

type ElementsPageProps = {
	children?: React.ReactNode;
};

export const ElementsPage: React.FC<ElementsPageProps> =
	React.memo(
		function ElementsPage() {
			return (
				<Box className='flex flex-col p-4'>
					<Typography variant='caption'>
						h1
					</Typography>
					<Typography variant='h1'>
						Jerusalem of three religions
					</Typography>
					<Seperator />

					<Typography variant='caption'>
						body1
					</Typography>
					<Typography variant='body1'>
						Raphael Purro
					</Typography>
					<Seperator />

					<Typography variant='caption'>
						body2
					</Typography>
					<Typography variant='body2'>
						consectetur adipiscing elit. At dolor tellus dolor facilisis odio non dignissim.
					</Typography>
					<Seperator />

					<Typography variant='caption'>
						caption
					</Typography>
					<Typography variant='caption'>
						Your guide
					</Typography>
					<Seperator />

					<Typography variant='caption'>
						button
					</Typography>
					<Typography variant='button'>
						Get Started
					</Typography>
					<Seperator />
				</Box>
			);
		}
	);
