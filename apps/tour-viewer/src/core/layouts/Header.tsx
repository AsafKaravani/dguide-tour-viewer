import React from 'react';
import { Box, Typography, TextField } from '@mui/material';
import { useGlobalHooks } from '@app/core/hooks/global-hooks';

type HeaderProps = {
	children?: React.ReactNode;
};

export const Header: React.FC<HeaderProps> =
	React.memo(
		function Header(_p) {
			const _g = useGlobalHooks();

			return (
				<Box sx={{ background: _g.theme.palette.primary.main }}>
					<Typography>
						asd
					</Typography>
					{_p.children}
				</Box>
			);
		}
	);
