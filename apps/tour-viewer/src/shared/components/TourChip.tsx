import React from 'react';
import { Box, BoxProps, Typography } from '@mui/material';
import { useGlobalHooks } from '@app/core/hooks/global-hooks';

type TourChipProps = {
	iconType: string;
	iconName: string;
	color?: string;
	children?: React.ReactNode;
} & BoxProps;

export const TourChip =
	React.memo(
		React.forwardRef<BoxProps, TourChipProps>(
			function TourChip(_p, ref) {
				const _g = useGlobalHooks();
				return (
					<Box ref={ref} className="inline-flex gap-2" {..._p}>
						<Box className="flex items-center justify-center rounded-full" sx={{
							width: 26,
							height: 26,
							border: 'solid 1px',
							borderColor: _p.color || _g.theme.palette.primary.main,
							color: _p.color || _g.theme.palette.primary.main,
						}}>
							<i className={`fa-${_p.iconType} fa-${_p.iconName}`}></i>
						</Box>
						<Typography variant='body2' className="flex items-center">
							{_p.children}
						</Typography>
					</Box>
				);
			}
		)
	);
