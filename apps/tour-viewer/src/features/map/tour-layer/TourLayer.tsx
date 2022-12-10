import React from 'react';
import { Box, BoxProps } from '@mui/material';
import { Marker, MarkerLayer } from 'react-leaflet-marker';
import { TourPin } from '@app/shared/components';
import { LatLngExpression, Map } from 'leaflet';

export type TourLayerProps = {
	children?: React.ReactNode;
};

export const TourLayer =
	React.memo<TourLayerProps>(
		function TourLayer(_p) {
			const position: LatLngExpression = [31.788009038677018, 34.62986136174621];

			return (
				<MarkerLayer>
					<Marker
						position={position}
						placement="top"
						interactive
						size={[40, 40 * 1.5]}
					>
						<TourPin size={40}>
							12
						</TourPin>
					</Marker>
				</MarkerLayer>

			);
		}

	);
