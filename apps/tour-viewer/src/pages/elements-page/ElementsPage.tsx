import React, { useEffect, useState } from 'react';
import { Box, Button, Fab, Link, Typography } from '@mui/material';
import { Seperator, StopCard, TourChip, TourPin } from '@app/shared/components';
import { useGlobalHooks } from '@app/core/hooks/global-hooks';

type ElementsPageProps = {
	children?: React.ReactNode;
};

export const ElementsPage: React.FC<ElementsPageProps> = React.memo(
	function ElementsPage() {
		const _g = useGlobalHooks();
		const [rtl, setRtl] = useState(false);

		useEffect(() => {
			document.dir = rtl ? 'rtl' : 'ltr';
		}, [rtl]);

		return (
			<>
				<Box className="p-4 mb-4 bg-white">
					<Typography variant="h2" color={_g.theme.palette.primary.main}>
						Elements page
					</Typography>
					<Typography variant="caption" className="mb-4">
						This page is for viewing all the components made for this project.
					</Typography>
				</Box>
				<Box className="flex flex-col p-4 mb-12">
					<Fab
						variant="extended"
						color="primary"
						className="fixed bottom-4 right-4 w-0"
						onClick={() => setRtl(!rtl)}
					>
						{rtl ? 'RTL' : 'LTR'}
					</Fab>

					<Typography variant="caption">H1</Typography>
					<Typography variant="h1">Jerusalem of three religions</Typography>
					<Seperator />

					<Typography variant="caption">H2</Typography>
					<Typography variant="h2">Jerusalem of three religions</Typography>
					<Seperator />

					<Typography variant="caption">Body1</Typography>
					<Typography variant="body1">Raphael Purro</Typography>
					<Seperator />

					<Typography variant="caption">Body2</Typography>
					<Typography variant="body2">
						consectetur adipiscing elit. At dolor tellus dolor facilisis odio
						non dignissim.
					</Typography>
					<Seperator />

					<Typography variant="caption">Caption</Typography>
					<Typography variant="caption">Your guide</Typography>
					<Seperator />

					<Typography variant="caption">Link</Typography>
					<Link href="#">Electricity Garden Parking...</Link>
					<Seperator />

					<Typography variant="caption">button text</Typography>
					<Typography variant="button">Get Started</Typography>
					<Seperator />

					<Typography variant="caption">Button</Typography>
					<Button className="mb-4">Primary Color</Button>
					<Button color="secondary">Secondary Color</Button>
					<Seperator />

					<Typography variant="caption">Chip</Typography>
					<Box className="flex gap-4">
						<TourChip iconType="solid" iconName="clock">
							3-4 Hours
						</TourChip>
						<TourChip iconType="solid" iconName="battery-bolt fa-rotate-270">
							Full Battery
						</TourChip>
						<TourChip iconType="brands" iconName="waze">
							Waze
						</TourChip>
					</Box>
					<Seperator />

					<Typography variant="caption">Stop card</Typography>
					<StopCard
						image_src=""
						title="House of Simon the Tanner"
						categories={['Historic']}
					/>
					<Seperator />

					<Typography className="mb-4" variant="caption">
						Tour pin
					</Typography>
					<Box className="flex gap-4">
						<TourPin size={40} active>
							1
						</TourPin>
						<TourPin size={40}>2</TourPin>
						<TourPin size={40}>
							<i className="fa-solid fa-store" />
						</TourPin>
						<TourPin size={40}>
							<i
								className="fa-regular fa-lightbulb"
								style={{ fontSize: '1.5em', position: 'relative', top: 2 }}
							/>
						</TourPin>
					</Box>
					<Seperator />
				</Box>
			</>
		);
	}
);
