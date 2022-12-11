import { TourStartPage } from '@app/pages/tour-start-page/TourStartPage';
import { atom_tourState } from '@app/shared/state/tour.atom';
import { CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { OpeningStopBlock } from '@app/features/map/opening-stop-block/OpeningStopBlock';
import { motion, AnimatePresence } from 'framer-motion';

type TourSummaryOverlayProps = {
	children?: React.ReactNode;
};

export const TourSummaryOverlay: React.FC = React.memo<TourSummaryOverlayProps>(
	function TourSummaryOverlay(_p) {
		const state_tourState = useRecoilValue(atom_tourState);
		const [hidePage, setHidePage] = useState(false);
		const [startTour, setStartTour] = useState(false);
		return (
			<AnimatePresence>
				{!state_tourState && (
					<Box
						className="fixed top-0 bottom-0 w-screen h-screen bg-white overflow-auto flex flex-col justify-center items-center"
						sx={{ zIndex: 99999 }}
					>
						<Typography variant="h2" className="mb-2">
							טוען מסלול
						</Typography>
						<CircularProgress />
					</Box>
				)}
				{state_tourState && !hidePage && (
					<motion.div
						key={'asdasd'}
						className="fixed top-0 bottom-0 w-screen h-screen bg-white overflow-auto"
						style={{ zIndex: 999999 }}
						transition={{ duration: 0.2 }}
						initial={{ opacity: 1, translateX: '0vh' }}
						animate={{ opacity: 1, translateX: '0vh' }}
						exit={{ opacity: 1, translateX: '-100vh' }}
					>
						<TourStartPage
							onClickStart={() => {
								setHidePage(true);
								setStartTour(true);
							}}
							tour={state_tourState}
							className=""
						/>
					</motion.div>
				)}
				{state_tourState && startTour && (
					<motion.div
						key={'asd'}
						className="fixed top-0 bottom-0 w-screen h-screen bg-white overflow-auto"
						style={{ zIndex: 999999 }}
						transition={{ duration: 0.2 }}
						initial={{ opacity: 1, translateX: '100vh' }}
						animate={{ opacity: 1, translateX: '0vh' }}
						exit={{ opacity: 1, translateX: '-100vh' }}
					>
						<OpeningStopBlock
							stop={state_tourState.stops[0]}
							onClickSkip={() => setStartTour(false)}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		);
	}
);
