import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from '@app/core/layouts/RootLayout';
import { ElementsPage } from '../../pages/elements-page/ElementsPage';


type RoutingLayerProps = {
	children?: React.ReactNode;
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <>404 Not Found</>,
		children: [
			{
				path: 'elements',
				element: <ElementsPage />,
			},
		],
	},
]);

export const RoutingLayer: React.FC<RoutingLayerProps> =
	function RoutingLayer() {
		return (
			<RouterProvider router={router} />
		);
	};
