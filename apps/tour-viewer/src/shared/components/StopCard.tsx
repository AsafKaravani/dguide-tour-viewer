import React from 'react';
import { Box, BoxProps, Typography } from '@mui/material';

export type StopCardProps = {
	title: string;
	categories: React.ReactNode[];
	image_src: string;
	children?: React.ReactNode;
};

export const StopCard = React.memo(
	React.forwardRef<BoxProps, StopCardProps & BoxProps>(function StopCard(
		_p,
		ref
	) {
		return (
			<Box
				ref={ref}
				className="flex bg-white rounded-md overflow-hidden p-0.5"
				{..._p}
			>
				<Box className="p-3 flex flex-1 flex-col justify-between">
					<Typography
						variant="button"
						className="mb-4 max-w-0 whitespace-nowrap"
					>
						{_p.title}
					</Typography>
					<Box className="flex flex-wrap justify-start">
						{_p.categories?.map((category) => (
							<Typography
								key={category?.toString()}
								variant="body2"
								textTransform="capitalize"
							>
								{category}&nbsp;&nbsp;
							</Typography>
						))}
					</Box>
				</Box>
				<Box className="flex">
					<Box className=" py-0.5 px-1 flex flex-col justify-end">
						<img src="/images/google-maps-icon.png" />
					</Box>
					<img
						src={_p.image_src}
						width="110px"
						className="object-cover object-center"
						style={{
							minWidth: '110px',
							borderStartEndRadius: 5,
							borderEndEndRadius: 5,
						}}
					/>
				</Box>
			</Box>
		);
	})
);
