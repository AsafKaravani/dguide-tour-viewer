import { StopCard } from '@app/shared/components';
import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';
import { useRecoilState, useRecoilValue } from 'recoil';
import { atom_tourState } from '@app/shared/state/tour.atom';
import { atom_activeStopState } from '@app/shared/state/active-stop.atom';

type TourOverlayLayerProps = {
	children?: React.ReactNode;
};

export const TourOverlayLayer: React.FC = React.memo<TourOverlayLayerProps>(
	function TourOverlayLayer(_p) {
		const state_TourState = useRecoilValue(atom_tourState);
		const [state_activeStopState, setState_activeStopState] =
			useRecoilState(atom_activeStopState);

		const handleSwipe = (index: number) => {
			setState_activeStopState(state_TourState?.stops[index]);
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
				<Box className="w-full">
					<Swiper
						spaceBetween={10}
						slidesPerView={1.3}
						touchMoveStopPropagation
						preventClicks
						preventClicksPropagation
						onSlideChange={(swiper) => handleSwipe(swiper.activeIndex)}
						style={{ overflow: 'visible' }}
					>
						{state_TourState?.stops.map((stop) => (
							<SwiperSlide key={stop.id}>
								<motion.div
									whileTap={{ scale: 0.9 }}
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
