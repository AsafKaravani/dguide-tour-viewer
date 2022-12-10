import { Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression, Map, TileLayer as TileLayerType } from 'leaflet';
import 'leaflet.offline';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { MapContainer } from 'react-leaflet';
import { Marker, MarkerLayer } from 'react-leaflet-marker';
import { TourPin } from '@app/shared/components/tour-pin/TourPin';

console.log(1);

const DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
});

type MapPageProps = {
	children?: React.ReactNode;
};
//https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png

export const MapPage = React.memo<MapPageProps>(
	function MapPage(_p) {
		const position: LatLngExpression = [31.788009038677018, 34.62986136174621];
		const map = useRef<Map>(null);
		const layer = useRef<TileLayerType>(null);
		useEffect(() => {
			setTimeout(() => {
				console.log(map.current);

				if (map.current) {

					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					const tileLayerOffline = L.tileLayer.offline(
						'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png',
						{
						}
					);

					tileLayerOffline.addTo(map.current);

					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					const controlSaveTiles = L.control.savetiles(
						tileLayerOffline,
						{
							zoomlevels: [13, 14, 15, 16], // optional zoomlevels to save, default current zoomlevel
						}
					);

					controlSaveTiles.addTo(map.current!);
				}

			}, 1000);
		}, []);
		return (
			<Box className='h-full w-full'>
				<MapContainer zoomControl={false} ref={map} className='h-full w-full' center={position} zoom={13}>
					{/* <TileLayer ref={layer}
						url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
					/> */}
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
				</MapContainer>
			</Box>
		);
	});
