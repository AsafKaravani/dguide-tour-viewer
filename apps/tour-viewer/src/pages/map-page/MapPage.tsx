import { Box } from '@mui/material';
import React from 'react';
import { LatLngBoundsExpression, LatLngExpression } from 'leaflet';
import { MapContainer } from 'react-leaflet';
import { OfflineTileLayer } from '@app/features/map/offline-tile-layer/OfflineTileLayer';
import { TourLayer } from '@app/features/map/tour-layer/TourLayer';
import 'leaflet/dist/leaflet.css';
import { TourOverlayLayer } from '@app/features/map/tour-overlay-layer/TourOverlayLayer';

export const MapPage = React.memo(function MapPage() {
	const position: LatLngExpression = [31.788009038677018, 34.62986136174621];

	return (
		<Box className="h-full w-full">
			<MapContainer
				className="h-full w-full"
				center={position}
				zoom={13}
				zoomControl={false}
			>
				<OfflineTileLayer />
				<TourLayer />
				<TourOverlayLayer />
			</MapContainer>
		</Box>
	);
});
