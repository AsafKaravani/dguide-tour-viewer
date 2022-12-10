import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from '@app/core/layouts/Header';
import { RtlLayer } from '@app/core/theme/RtlLayer';
import { InitialDataFetch } from '@app/features/initial-data-fetch/InitialDataFetch';

type RootLayoutProps = {
	children?: React.ReactNode;
};

export const RootLayout: React.FC<RootLayoutProps> = React.memo(
	function RootLayout(_p) {
		return (
			<>
				<InitialDataFetch />
				<RtlLayer>
					<Box className="h-screen flex flex-col bg-slate-100">
						{/* <Header /> */}
						<Box className="flex-1 overflow-auto">
							<Outlet />
						</Box>
					</Box>
				</RtlLayer>
			</>
		);
	}
);
