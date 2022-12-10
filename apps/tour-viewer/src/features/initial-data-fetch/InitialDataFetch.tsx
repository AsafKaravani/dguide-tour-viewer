import { service_tourService } from '@app/shared/services/tours.service';
import { atom_tourState } from '@app/shared/state/tour.atom';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

type InitialDataFetchProps = {
	children?: React.ReactNode;
};

export const InitialDataFetch: React.FC = React.memo<InitialDataFetchProps>(
	function InitialDataFetch(_p) {
		const setTourState = useSetRecoilState(atom_tourState);
		const { tourId } = useParams();

		useEffect(() => {
			(async () => {
				if (tourId) {
					const tour = await service_tourService.getTourById(tourId);
					setTourState(tour);
				}
			})();
		}, []);

		return <></>;
	}
);
