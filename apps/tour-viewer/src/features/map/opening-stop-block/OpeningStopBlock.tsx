import React from 'react';
import { Box, BoxProps, Button, Typography } from '@mui/material';
import { Stop } from '@app/shared/models/tour.type';

export type OpeningStopBlockProps = {
	stop: Stop;
	onClickSkip?: () => void;
	children?: React.ReactNode;
};

export const OpeningStopBlock = React.memo(
	React.forwardRef<BoxProps, OpeningStopBlockProps & BoxProps>(
		function OpeningStopBlock(_p, ref) {
			return (
				<Box ref={ref} className="p-4 text-center">
					<Typography variant="h2" className="my-6">
						תחנת הפתיחה שלנו היא
					</Typography>
					<Typography variant="h1" className="mb-4">
						{_p.stop.s_title}
					</Typography>
					<Typography variant="caption" className="inline-block mb-4">
						{_p.stop.s_smallDesc}
					</Typography>
					<Box>
						<img src={_p.stop.loc_pics[0].url} className="rounded-xl" />
					</Box>
					<Typography variant="h2" className="my-6 px-12">
						רגע לפני שמתחילים, האם תרצו לנווט לנק' ההתחלה?
					</Typography>
					<Box className="flex gap-8 justify-center mb-4">
						<img src="/images/waze-icon.png" width={20} />
						<img src="/images/google-maps-icon.png" width={20} />
					</Box>
					<Button onClick={_p.onClickSkip} variant="text" fullWidth>
						דלג
					</Button>
				</Box>
			);
		}
	)
);
