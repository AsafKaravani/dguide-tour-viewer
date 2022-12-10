import React from 'react';
import { Box, BoxProps } from '@mui/material';
import { useGlobalHooks } from '@app/core/hooks/global-hooks';

export type TourPinProps = {
	size: number;
	active?: boolean;
	children?: React.ReactNode;
};

export const TourPin = React.memo(
	React.forwardRef<BoxProps, TourPinProps & BoxProps>(function TourPin(
		_p,
		ref
	) {
		const _g = useGlobalHooks();
		return (
			<Box
				ref={ref}
				{..._p}
				className={`inline-block relative origin-bottom ${
					_p.active && 'scale-110'
				}`}
				sx={{ position: 'relative', top: _p.size * -1.5, left: _p.size * -0.5 }}
			>
				<svg
					className="absolute top-0 scale-110"
					style={{ transformOrigin: '50% 35%' }}
					width={_p.size}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1913.42 2705.38"
				>
					<defs>
						<style>
							.cls-2{`{fill:${_g.theme.palette.secondary.contrastText};}`}
						</style>
					</defs>
					<title>locaiton-pin</title>
					<g id="Layer_2" data-name="Layer 2">
						<g id="Layer_2-2" data-name="Layer 2">
							<path
								className="cls-2"
								d="M1913.42,956.71c0,429.18-631.21,1366.08-868.21,1702.73-43.12,61.25-133.88,61.25-177,0C631.21,2322.79,0,1385.89,0,956.71,0,428.33,428.33,0,956.71,0S1913.42,428.33,1913.42,956.71Z"
							/>
						</g>
					</g>
				</svg>
				<svg
					className="relative scale-100"
					width={_p.size}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1913.42 2705.38"
				>
					<defs>
						<style>.cls-1{`{fill:${_g.theme.palette.primary.main};}`}</style>
					</defs>
					<title>locaiton-pin</title>
					<g id="Layer_2" data-name="Layer 2">
						<g id="Layer_2-2" data-name="Layer 2">
							<path
								className="cls-1"
								d="M1913.42,956.71c0,429.18-631.21,1366.08-868.21,1702.73-43.12,61.25-133.88,61.25-177,0C631.21,2322.79,0,1385.89,0,956.71,0,428.33,428.33,0,956.71,0S1913.42,428.33,1913.42,956.71Z"
							/>
						</g>
					</g>
				</svg>
				{!_p.active && (
					<svg
						className="absolute top-0 left-0 scale-75"
						style={{ transformOrigin: '50% 35%' }}
						width={_p.size}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1913.42 2705.38"
					>
						<defs>
							<style>
								.cls-3{`{fill:${_g.theme.palette.secondary.contrastText};}`}
							</style>
						</defs>
						<title>locaiton-pin</title>
						<g id="Layer_2" data-name="Layer 2">
							<g id="Layer_2-2" data-name="Layer 2">
								<path
									className="cls-3"
									d="M1913.42,956.71c0,429.18-631.21,1366.08-868.21,1702.73-43.12,61.25-133.88,61.25-177,0C631.21,2322.79,0,1385.89,0,956.71,0,428.33,428.33,0,956.71,0S1913.42,428.33,1913.42,956.71Z"
								/>
							</g>
						</g>
					</svg>
				)}
				<Box
					className="flex items-center justify-center"
					sx={{
						width: _p.size,
						height: _p.size,
						position: 'absolute',
						top: 0,
						color: _p.active
							? _g.theme.palette.primary.contrastText
							: '#3B3A36',
						fontSize: typeof _p.children === 'string' ? '1.3em' : '1em',
						fontWeight: _p.active ? 800 : 600,
						fontFamily: _g.theme.typography.fontFamily,
					}}
				>
					<Box sx={{ zIndex: 200 }}>{_p.children}</Box>
				</Box>
			</Box>
		);
	})
);

function getContrastYIQ(hexcolor: string) {
	const r = parseInt(hexcolor.substr(0, 2), 16);
	const g = parseInt(hexcolor.substr(2, 2), 16);
	const b = parseInt(hexcolor.substr(4, 2), 16);
	const yiq = (r * 299 + g * 587 + b * 114) / 1000;
	return yiq >= 128 ? 'black' : 'white';
}
