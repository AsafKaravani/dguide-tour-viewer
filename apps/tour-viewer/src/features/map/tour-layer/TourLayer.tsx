import React, { useEffect, useState } from 'react';
import { Marker, MarkerLayer } from 'react-leaflet-marker';
import { TourPin } from '@app/shared/components';
import { useRecoilValue } from 'recoil';
import { atom_tourState } from '@app/shared/state/tour.atom';
import { useLeafletContext } from '@react-leaflet/core';
import { Pane, Polyline } from 'react-leaflet';
import { useGlobalHooks } from '@app/core/hooks/global-hooks';
import { service_routeService } from '@app/shared/services/route.service';
import { atom_activeStopState } from '@app/shared/state/active-stop.atom';

export const TourLayer = React.memo(function TourLayer() {
	const state_activeStopState = useRecoilValue(atom_activeStopState);
	const state_TourState = useRecoilValue(atom_tourState);
	const tourWaypoints_latLngReversed: [number, number][] =
		state_TourState?.stops.map((stop) => [
			stop.stop_location.longitude,
			stop.stop_location.latitude,
		]) ?? [];

	const [walkingWaypoints, setWalkingWaypoints] = useState([]);

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
						{state_TourState?.stops
							.filter((stop) => stop.id !== state_activeStopState?.id)
							.map((stop) => {
								return (
									<Marker
										key={stop.id}
										position={{
											lat: stop.stop_location.latitude,
											lng: stop.stop_location.longitude,
										}}
										placement="bottom"
										size={[0, 0]}
									>
										<TourPin
											size={40}
											active={state_activeStopState?.id === stop?.id}
										>
											{stop.type === 'bigStop' ? (
												(stop.order + 1).toString()
											) : (
												<i className="fa-solid fa-store scale-125" />
											)}
										</TourPin>
									</Marker>
								);
							})}
					</MarkerLayer>
				</Pane>
			)}

			<Pane name="tour-route" style={{ zIndex: 210 }}>
				<Polyline
					pathOptions={{
						color: _g.theme.palette.primary.main,
						dashArray: '10, 10',
					}}
					positions={walkingWaypoints.map((w) => [w[1], w[0]])}
				/>
			</Pane>
			{state_activeStopState && (
				<Pane name="tour-active-stop" style={{ zIndex: 999 }}>
					<MarkerLayer>
						<Marker
							key={state_activeStopState.id}
							position={{
								lat: state_activeStopState.stop_location.latitude,
								lng: state_activeStopState.stop_location.longitude,
							}}
							placement="bottom"
							size={[0, 0]}
						>
							<TourPin size={40} active={true}>
								{state_activeStopState.type === 'bigStop' ? (
									(state_activeStopState.order + 1).toString()
								) : (
									<i className="fa-solid fa-store scale-125" />
								)}
							</TourPin>
						</Marker>
					</MarkerLayer>
				</Pane>
			)}
		</>
	);
});
