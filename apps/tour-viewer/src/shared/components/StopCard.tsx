import React from 'react';
import { Box, BoxProps, Typography } from '@mui/material';

type StopCardProps = {
	title: string;
	categories: string[];
	children?: React.ReactNode;
} & BoxProps;

export const StopCard =
	React.memo(
		React.forwardRef<BoxProps, StopCardProps>(
			function StopCard(_p, ref) {
				return (
					<Box ref={ref} className="flex bg-white rounded-md overflow-hidden" {..._p}>
						<Box className='p-3 flex flex-1 flex-col justify-between'>
							<Typography variant='button' className='mb-4'>
								{_p.title}
							</Typography>
							<Box className='flex flex-wrap justify-start'>
								{_p.categories?.map(category => (
									<Typography key={category} variant='body2' textTransform='capitalize'>
										{category}&nbsp;&nbsp;
									</Typography>
								))}
							</Box>
						</Box>
						<Box className='flex'>
							<Box className='p-3 flex flex-col justify-end'>
								<img src='images/google-maps-icon.png' />
							</Box>
							<img src='images/sample-image.png' width='110px' style={{ minWidth: '110px' }} />
						</Box>
					</Box>
				);
			}
		)
	);
