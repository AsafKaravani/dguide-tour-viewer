import React, { useEffect, useState } from 'react';
import { Marker, MarkerLayer } from 'react-leaflet-marker';
import { TourPin } from '@app/shared/components';
import { useRecoilValue } from 'recoil';
import { atom_tourState } from '@app/shared/state/tour.atom';
import { useLeafletContext } from '@react-leaflet/core';
import { Pane, Polyline } from 'react-leaflet';
import { useGlobalHooks } from '@app/core/hooks/global-hooks';
import { LatLngExpression } from 'leaflet';
import { service_routeService } from '@app/shared/services/route.service';
//5b3ce3597851110001cf6248ad8483d00dbb489e958c465e60ca3baa

export const TourLayer = React.memo(function TourLayer() {
	const state_TourState = useRecoilValue(atom_tourState);
	const tourWaypoints: [number, number][] =
		state_TourState?.stops.map((stop) => [
			stop.stop_location.latitude,
			stop.stop_location.longitude,
		]) ?? [];

	const tourWaypoints_latLngReversed: [number, number][] =
		state_TourState?.stops.map((stop) => [
			stop.stop_location.longitude,
			stop.stop_location.latitude,
		]) ?? [];

	const [walkingWaypoints, setWalkingWaypoints] = useState([]);

	const leaflet = useLeafletContext();
	const _g = useGlobalHooks();

	useEffect(() => {
		console.log(state_TourState);

		const firstStop = state_TourState?.stops[0];
		if (firstStop?.stop_location)
			leaflet.map.panTo(
				[firstStop?.stop_location.latitude, firstStop?.stop_location.longitude],
				{
					duration: 1,
					animate: true,
				}
			);

		(async () => {
			if (!tourWaypoints_latLngReversed?.length) return;
			setWalkingWaypoints(
				(await service_routeService.getRoute(tourWaypoints_latLngReversed))
					.features[0].geometry.coordinates
			);
		})();
	}, [state_TourState]);

	return (
		<>
			{state_TourState && (
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
								<TourPin size={40}>
									{stop.type === 'bigStop' ? (
										(stop.order + 1).toString()
									) : (
										<i className="fa-solid fa-store scale-125" />
									)}
								</TourPin>
							</Marker>
						))}
					</MarkerLayer>
				</Pane>
			)}

			<Pane name="tour-route" style={{ zIndex: 210 }}>
				<Polyline
					pathOptions={{
						color: _g.theme.palette.primary.main,
					}}
					positions={walkingWaypoints.map((w) => [w[1], w[0]])}
				/>
			</Pane>
		</>
	);
});
