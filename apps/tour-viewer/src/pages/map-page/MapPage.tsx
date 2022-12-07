import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet.offline';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
});

type MapPageProps = {
	children?: React.ReactNode;
};

export const MapPage = React.memo<MapPageProps>(
	function MapPage(_p) {
		const [map, setMap] = useState<L.Map>();

		useEffect(() => {
			const container = L.DomUtil.get('map') as any;

			if (container != null) {
				if (container._leaflet_id) return;
			}
			console.log('init map');

			const map = new L.Map('map', {
				zoomControl: false,
			}).setView([
				31.788009038677018, 34.62986136174621], 13);

			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			const tileLayerOffline = L.tileLayer.offline(
				'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png',
				{
					zoomControl: false,
				}
			);

			// tileLayerOffline.on('savestart', (e: any) => {
			// 	setDownloading(true);
			// 	setProgress(0);
			// 	p.current = 0;
			// 	setTotal(e._tilesforSave.length);

			// });

			// console.log('register');
			// tileLayerOffline.on('savetileend', () => {
			// 	p.current = p.current + 1;
			// 	setProgress(p.current);
			// });

			tileLayerOffline.addTo(map);


		}, [])

		return (
			<Box className='h-full w-full'>
				<div id="map" className='h-full w-full'></div>
			</Box>
		);
	});
