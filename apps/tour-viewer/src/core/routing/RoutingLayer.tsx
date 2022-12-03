import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from '@app/core/layouts/RootLayout';


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
				path: 'contacts',
				element: <>child</>,
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
