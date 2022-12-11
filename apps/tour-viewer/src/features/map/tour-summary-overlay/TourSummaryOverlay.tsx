import { TourStartPage } from '@app/pages/tour-start-page/TourStartPage';
import { atom_tourState } from '@app/shared/state/tour.atom';
import { CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';

type TourSummaryOverlayProps = {
	children?: React.ReactNode;
};

export const TourSummaryOverlay: React.FC = React.memo<TourSummaryOverlayProps>(
	function TourSummaryOverlay(_p) {
		const state_tourState = useRecoilValue(atom_tourState);
		const [hidePage, setHidePage] = useState(false);
		return (
			<>
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
					<Box
						className="fixed top-0 bottom-0 w-screen h-screen bg-white overflow-auto"
						sx={{ zIndex: 99999 }}
					>
						<TourStartPage
							onClickStart={() => setHidePage(true)}
							tour={state_tourState}
							className=""
						/>
					</Box>
				)}
			</>
		);
	}
);
