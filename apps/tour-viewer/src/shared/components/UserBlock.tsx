import React from 'react';
import { Avatar, Box, BoxProps, Typography } from '@mui/material';

type UserBlockProps = {
	title: string;
	name: string;
	children?: React.ReactNode;
} & BoxProps;

export const UserBlock =
	React.memo(
		React.forwardRef<BoxProps, UserBlockProps>(
			function UserBlock(_p, ref) {
				return (
					<Box ref={ref} {..._p} className='inline-flex gap-2 my-2'>
						<Box>
							<Avatar />
						</Box>
						<Box className='flex flex-col'>
							<Typography variant='caption'>
								{_p.title}
							</Typography>
							<Typography variant='body1'>
								{_p.name}
							</Typography>
						</Box>
					</Box>
				);
			}
		)
	);
