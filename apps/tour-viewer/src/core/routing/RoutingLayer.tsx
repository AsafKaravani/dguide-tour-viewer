import React from 'react';
import {
	createBrowserRouter,
	redirect,
	RouterProvider,
} from 'react-router-dom';
import { RootLayout } from '@app/core/layouts/RootLayout';
import { ElementsPage } from '@app/pages/elements-page/ElementsPage';
import { TourStartPage } from '@app/pages/tour-start-page/TourStartPage';
import { MapPage } from '@app/pages/map-page/MapPage';

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
				path: '/:tourId',
				element: <MapPage />,
			},
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
		return <RouterProvider router={router} />;
	};
