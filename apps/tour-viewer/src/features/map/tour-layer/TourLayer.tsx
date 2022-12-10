import React, { useEffect } from 'react';
import { Marker, MarkerLayer } from 'react-leaflet-marker';
import { TourPin } from '@app/shared/components';
import { useRecoilValue } from 'recoil';
import { atom_tourState } from '@app/shared/state/tour.atom';
import { useLeafletContext } from '@react-leaflet/core';
import { Pane, Polyline } from 'react-leaflet';
import { useGlobalHooks } from '@app/core/hooks/global-hooks';
import { LatLngExpression } from 'leaflet';

export const TourLayer = React.memo(function TourLayer() {
	const state_TourState = useRecoilValue(atom_tourState);
	const tourWaypoints: LatLngExpression[] =
		state_TourState?.stops.map((stop) => [
			stop.stop_location.latitude,
			stop.stop_location.longitude,
		]) ?? [];
	const leaflet = useLeafletContext();
	const _g = useGlobalHooks();

	useEffect(() => {
		const firstStop = state_TourState?.stops[0];
		if (firstStop?.stop_location)
			leaflet.map.panTo(
				[firstStop?.stop_location.latitude, firstStop?.stop_location.longitude],
				{
					duration: 1,
					animate: true,
				}
			);
		setTimeout(() => {
			console.log(leaflet.map.getPanes());
		}, 1000);
	}, [state_TourState]);

	return (
		<>
			{state_TourState && (
				<>
					<Pane name="tour-stops" style={{ zIndex: 250 }}>
						<MarkerLayer>
							{state_TourState?.stops.map((stop) => (
								<Marker
									key={stop.id}
									position={{
										lat: stop.stop_location.latitude,
										lng: stop.stop_location.longitude,
									}}
									placement="bottom"
									size={[0, 0]}
								>
									<TourPin size={40}>{(stop.order + 1).toString()}</TourPin>
								</Marker>
							))}
						</MarkerLayer>
					</Pane>
					<Pane name="tour-route" style={{ zIndex: 210 }}>
						<Polyline
							pathOptions={{
								color: _g.theme.palette.primary.main,
							}}
							positions={tourWaypoints}
						/>
					</Pane>
				</>
			)}
		</>
	);
});
