import React from 'react';
import { Box, BoxProps, Button, Typography } from '@mui/material';
import { Stop } from '@app/shared/models/tour.type';
import { Seperator } from '@app/shared/components';
import ReactPlayer from 'react-player';

export type BigStopPageProps = {
	stop: Stop;
	onClickBack?: () => void;
	children?: React.ReactNode;
};

export const BigStopPage = React.memo(
	React.forwardRef<BoxProps, BigStopPageProps & BoxProps>(function BigStopPage(
		_p,
		ref
	) {
		return (
			<Box ref={ref}>
				<Box className="flex justify-between p-4">
					<Button onClick={_p.onClickBack} className="p-0 w-10 h-10 min-w-min">
						<i className="fa-solid fa-chevron-right" />
					</Button>
					<Box className="flex flex-wrap justify-start items-center">
						{_p.stop.tags?.map((tag) => (
							<Typography
								key={tag?.toString()}
								variant="body2"
								textTransform="capitalize"
							>
								{tag}&nbsp;&nbsp;
							</Typography>
						))}
					</Box>
					<Button variant="text" className="p-0 w-10 h-10 min-w-min">
						<img src="/images/google-maps-icon.png" width={20} />
					</Button>
				</Box>
				<Box className="px-4">
					<Typography variant="h1" className="mb-2">
						{_p.stop.s_title}
					</Typography>
					<Typography variant="body1">תיאור</Typography>
					<Typography variant="body2">{_p.stop.s_smallDesc}</Typography>
					<Seperator />
				</Box>
				<Box className="flex flex-col gap-10">
					{_p.stop.all_media.map((media, i) => {
						console.log(media.title);
						console.log(media.type);
						if (media.type === 'video/mp4')
							return (
								<Box key={media.order}>
									<Typography className="p-4 pb-2">{media.title}</Typography>
									<ReactPlayer
										key={media.order}
										style={{ maxHeight: '30vh' }}
										width="100%"
										url={media.url}
										controls
									/>
								</Box>
							);

						if (media.type === 'audio/mpeg')
							return (
								<Box key={media.order}>
									<Typography className="p-4 pb-2">{media.title}</Typography>
									<ReactPlayer
										key={media.order}
										style={{ maxHeight: '30vh' }}
										width="100%"
										url={media.url}
										controls
									/>
								</Box>
							);

						if (media.type === 'question')
							return (
								<Box className="p-4 pb-2" key={media.order}>
									<Typography>{media.title}</Typography>
									<Typography>{media.question_text}</Typography>
									{media.options.map((option, i2) => (
										<Typography key={i2}>{option.option}</Typography>
									))}
								</Box>
							);

						if (media.type === 'text')
							return (
								<Box className="p-4 pb-2" key={media.order}>
									<Typography>{media.title}</Typography>
									<Typography variant="body2">{media.content}</Typography>
									<Seperator />
								</Box>
							);
					})}
				</Box>
				<Box sx={{ height: '50vh' }}></Box>
			</Box>
		);
	})
);
