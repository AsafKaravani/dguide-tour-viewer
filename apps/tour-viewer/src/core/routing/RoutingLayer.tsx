import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from '@app/core/layouts/RootLayout';
import { ElementsPage } from '@app/pages/elements-page/ElementsPage';
import { TourStartPage } from '@app/pages/tour-start-page/TourStartPage';


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
			{
				path: 'tour',
				element: <TourStartPage />,
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
