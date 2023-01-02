import React from 'react';
import { Box, BoxProps, Typography, Link, Button } from '@mui/material';
import { Seperator, TourChip, UserBlock } from '@app/shared/components';
import ReactPlayer from 'react-player';
import { Tour } from '@app/shared/models/tour.type';

type TourStartPageProps = {
	tour: Tour;
	onClickStart?: () => void;
	onClickDownload?: () => void;
	children?: React.ReactNode;
} & BoxProps;

export const TourStartPage = React.forwardRef<BoxProps, TourStartPageProps>(
	function TourStartPage(_p, ref) {
		return (
			<Box ref={ref}>
				<Box className="flex items-center justify-center bg-white ">
					{_p.tour.exp_video && (
						<ReactPlayer
							style={{ maxHeight: '40vh' }}
							width="100%"
							url={_p.tour.exp_video}
							controls
						/>
					)}
				</Box>
				<Box className="p-4">
					<Typography variant="h1">{_p.tour.title}</Typography>
					<Seperator />

					<UserBlock
						title="המדריך שלך"
						name={_p.tour.tour_guide.full_name}
						image_url={_p.tour.tour_guide.profile_image}
					/>
					<Seperator />
					<Seperator />

					<Typography variant="body2" className="mb-2" fontWeight={800}>
						לא לשכוח
					</Typography>
					<Box className="flex flex-wrap gap-4 mb-4">
						{_p.tour.equipment.map((item) => (
							<TourChip
								key={item}
								icon_type="solid"
								icon_name={iconsMap[item]}
								fontSize="0.8em"
							>
								{item}
							</TourChip>
						))}
					</Box>

					<Typography variant="body2" className="mb-2" fontWeight={800}>
						המסלול
					</Typography>
					<Box className="flex flex-wrap gap-4">
						<TourChip
							icon_type="solid"
							icon_name="map-location"
							fontSize="0.8em"
						>
							{(_p.tour.distance / 1000).toFixed(1)} ק"מ
						</TourChip>
						<TourChip icon_type="solid" icon_name="clock">
							{_p.tour.duration} שעות
						</TourChip>
					</Box>

					<Seperator />

					<Box className="flex justify-between">
						<TourChip icon_type="solid" icon_name="p" fontSize="0.95em">
							<>חניה: &nbsp;</>
							<Link href="#">שער יפו ירושלים...</Link>
						</TourChip>
						<Box className="flex gap-3 items-center">
							<img src="/images/waze-icon.png" width={20} />
							<img src="/images/google-maps-icon.png" width={20} />
						</Box>
					</Box>
					<Seperator />

					{Array.isArray(_p.tour.notes) ? (
						_p.tour.notes.map((txt, i) => (
							<Typography key={i} variant="body2" className="mb-4">
								{txt}
							</Typography>
						))
					) : (
						<Typography variant="body2" className="mb-4">
							{_p.tour.notes}
						</Typography>
					)}
					<Typography variant="body2" className="mb-4"></Typography>

					<Box className="flex flex-col">
						<Button className="mb-5" onClick={_p.onClickStart}>
							צא לדרך!
						</Button>

						<Typography
							variant="body2"
							className="mb-2 text-center"
							fontWeight={800}
						>
							לשימוש המסלול גם ללא רשת לחץ מטה!
						</Typography>
						<Button color="secondary" onClick={_p.onClickDownload}>
							הורד מסלול
						</Button>
					</Box>
					<Seperator className="mb-10 opacity-0" />
				</Box>
			</Box>
		);
	}
);

const iconsMap: any = {
	מים: 'bottle-water mt-0.5',
	'סוללה מלאה': 'battery-bolt fa-rotate-270',
};
