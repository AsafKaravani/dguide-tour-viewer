import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

type RootLayoutProps = {
	children?: React.ReactNode;
};

export const RootLayout: React.FC<RootLayoutProps> =
	React.memo(function RootLayout(_p) {
		return (
			<Box sx={{ height: '100vh' }}>
				<Header />
				<Box>

				</Box>
			</Box>
		);
	});
