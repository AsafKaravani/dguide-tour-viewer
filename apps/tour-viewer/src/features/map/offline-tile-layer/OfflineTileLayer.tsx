import React, { useEffect } from 'react';
import { useLeafletContext } from '@react-leaflet/core'

import _L from 'leaflet';
import 'leaflet.offline';


export const OfflineTileLayer = React.memo(
	function OfflineTileLayer() {
		const leaflet = useLeafletContext();
		const L = _L as any;

		useEffect(() => {
			if (leaflet.map) {


				const tileLayerOffline = L.tileLayer.offline(
					'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png'
				);

				tileLayerOffline.addTo(leaflet.map);

				const controlSaveTiles = L.control.savetiles(
					tileLayerOffline,
					{
						zoomlevels: [13, 14, 15, 16],
					}
				);
				// setTimeout(() => {
				// 	controlSaveTiles._saveTiles();
				// }, 2000);

				return () => {
					leaflet.map.removeControl(controlSaveTiles);
				}
			}
		});

		return <></>;
	}

);
