import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { RtlLayer } from '@app/core/theme/RtlLayer';

type RootLayoutProps = {
	children?: React.ReactNode;
};

export const RootLayout: React.FC<RootLayoutProps> =
	React.memo(function RootLayout(_p) {
		return (
			<RtlLayer>
				<Box className='h-screen flex flex-col bg-slate-100'>
					{/* <Header /> */}
					<Box className='flex-1'>
						<Outlet />
					</Box>
				</Box>
			</RtlLayer>
		);
	});
