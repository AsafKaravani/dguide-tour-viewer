import { Box } from '@mui/material';
import React from 'react';
import { LatLngBoundsExpression, LatLngExpression } from 'leaflet';
import { MapContainer } from 'react-leaflet';
import { OfflineTileLayer } from '@app/features/map/offline-tile-layer/OfflineTileLayer';
import { TourLayer } from '@app/features/map/tour-layer/TourLayer';
import 'leaflet/dist/leaflet.css';

export const MapPage = React.memo(
	function MapPage() {
		const position: LatLngExpression = [31.788009038677018, 34.62986136174621];
		const bounds: LatLngBoundsExpression = [[31.788009038677018, 34.62986136174621], [31.788009038677018, 34.62986136174621]]
		return (
			<Box className='h-full w-full'>
				<MapContainer className='h-full w-full' center={position} zoom={13} minZoom={16} maxZoom={18} zoomControl={false} bounds={bounds}>
					<OfflineTileLayer />
					<TourLayer />
				</MapContainer>
			</Box>
		);
	});
