// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import openrouteservice from 'openrouteservice-js';

const Directions = new openrouteservice.Directions({
	api_key: '5b3ce3597851110001cf6248ad8483d00dbb489e958c465e60ca3baa',
});

export const service_routeService = {
	getRoute: async (waypoints: [number, number][]) => {
		return await Directions.calculate({
			coordinates: waypoints,
			profile: 'foot-walking',
			format: 'geojson',
			language: 'he-il',
		});
	},
};
