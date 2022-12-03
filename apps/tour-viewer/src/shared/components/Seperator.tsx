import React from 'react';

type SeperatorProps = {
	children?: React.ReactNode;
};

export const Seperator: React.FC<SeperatorProps> =
	React.memo(
		React.forwardRef<HTMLDivElement, SeperatorProps>(
			function Seperator(_p, ref) {
				return (
					<div ref={ref} className='h-px w-full bg-black opacity-20 my-4'>
					</div>
				);
			}
		)
	);
