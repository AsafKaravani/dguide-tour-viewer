import React from 'react';
import { Box, BoxProps, Typography, Link, Button } from '@mui/material';
import { Seperator, TourChip, UserBlock } from '@app/shared/components';
import ReactPlayer from 'react-player'

type TourStartPageProps = {
	children?: React.ReactNode;
} & BoxProps;

export const TourStartPage =
	React.memo(
		React.forwardRef<BoxProps, TourStartPageProps>(
			function TourStartPage(_p, ref) {
				return (
					<Box ref={ref} {..._p}>
						<Box className='flex items-center justify-center h-52 bg-white'>
							<ReactPlayer height='100%' url='/videos/sample-video.mp4' controls />
						</Box>
						<Box className='p-4'>

							<Typography variant='h1'>
								Jerusalem of three religions
							</Typography>
							<Seperator />

							<UserBlock title='Your guide' name='Raphael' />
							<Seperator />
							<Seperator />

							<Typography variant='body2' className='mb-2' fontWeight={800}>
								Do not forget
							</Typography>
							<Box className='flex gap-4'>
								<TourChip iconType='solid' iconName='map-location' fontSize='0.8em'>
									2.19 km
								</TourChip>
								<TourChip iconType='solid' iconName='clock'>
									3-4 Hours
								</TourChip>
								<TourChip iconType='solid' iconName='battery-bolt fa-rotate-270'>
									Full Battery
								</TourChip>
							</Box>
							<Seperator />

							<Box className='flex justify-between'>
								<TourChip iconType='solid' iconName='p' fontSize='0.95em'>
									<>Parking: &nbsp;</>
									<Link href="#">Electricity Garden Parking...</Link>
								</TourChip>
								<Box className='flex gap-3 items-center'>
									<img src='images/waze-icon.png' width={20} />
									<img src='images/google-maps-icon.png' width={20} />
								</Box>
							</Box>
							<Seperator />

							<Typography variant='body2' className='mb-4'>
								<b>Lorem ipsum dolor sit amet?</b>
								<br />
								consectetur adipiscing elit. At dolor tellus dolor facilisis odio non dignissim.
							</Typography>
							<Typography variant='body2' className='mb-4'>
								<b>Lorem ipsum dolor sit amet?</b>
								<br />
								consectetur adipiscing elit. At dolor tellus dolor facilisis odio non dignissim.
							</Typography>
							<Typography variant='body2' className='mb-4'>
								<b>Lorem ipsum dolor sit amet?</b>
								<br />
								consectetur adipiscing elit. At dolor tellus dolor facilisis odio non dignissim.
							</Typography>

							<Box className='flex flex-col'>
								<Button className='mb-5'>
									Get Started
								</Button>

								<Typography variant='body2' className='mb-2 text-center' fontWeight={800}>
									Want to use it offline?
								</Typography>
								<Button color='secondary'>
									Download
								</Button>
							</Box>
						</Box>
					</Box>
				);
			}
		)
	);
