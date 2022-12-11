import { StopCard } from '@app/shared/components';
import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';
import { useRecoilState, useRecoilValue } from 'recoil';
import { atom_tourState } from '@app/shared/state/tour.atom';
import { atom_activeStopState } from '@app/shared/state/active-stop.atom';
import { useLeafletContext } from '@react-leaflet/core';
import { Stop } from '@app/shared/models/tour.type';

type TourOverlayLayerProps = {
	children?: React.ReactNode;
};

export const TourOverlayLayer: React.FC = React.memo<TourOverlayLayerProps>(
	function TourOverlayLayer(_p) {
		const leaflet = useLeafletContext();

		const state_TourState = useRecoilValue(atom_tourState);
		const [state_activeStopState, setState_activeStopState] =
			useRecoilState(atom_activeStopState);

		useEffect(() => {
			if (!state_activeStopState?.stop_location) return;
			leaflet.map.flyTo(
				[
					state_activeStopState?.stop_location.latitude,
					state_activeStopState?.stop_location.longitude,
				],
				17,
				{
					duration: 0.3,
				}
			);
		}, [state_activeStopState]);

		const handleSwipe = (index: number) => {
			setState_activeStopState(state_TourState?.stops[index]);
		};

		const handleStopCardClick = (stop: Stop) => {
			leaflet.map.flyTo(
				[stop.stop_location.latitude, stop.stop_location.longitude],
				18,
				{ duration: 0.5 }
			);
		};

		useEffect(() => {
			setState_activeStopState(state_TourState?.stops[0]);
		}, [state_TourState]);

		return (
			<Box
				className="fixed bottom-0 flex flex-col justify-between w-full h-full"
				sx={{ zIndex: 500 }}
			>
				<Box></Box>
				<Box
					className="w-full"
					sx={{
						background: 'linear-gradient(0deg, #00000050 100%, #00000000 100%)',
					}}
				>
					<Swiper
						spaceBetween={10}
						slidesPerView={1.3}
						touchMoveStopPropagation
						onSlideChange={(swiper) => handleSwipe(swiper.activeIndex)}
						style={{ overflow: 'visible' }}
					>
						{state_TourState?.stops.map((stop) => (
							<SwiperSlide key={stop.id}>
								<motion.div
									whileTap={{ scale: 0.9 }}
									onClick={() => handleStopCardClick(stop)}
									className="mb-4"
									style={{ marginInlineStart: 12 }}
									dragElastic
								>
									<StopCard
										sx={{ width: '100%', height: '15vh' }}
										title={stop.s_title}
										image_src={
											stop.loc_pics?.length ? stop.loc_pics[0].url : ''
										}
										categories={stop.tags}
									/>
								</motion.div>
							</SwiperSlide>
						))}
					</Swiper>
				</Box>
			</Box>
		);
	}
);
