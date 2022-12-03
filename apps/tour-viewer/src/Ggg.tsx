import React from 'react';

type GggProps = {
	children?: React.ReactNode;
};

export const Ggg: React.FC<GggProps> =
	React.memo(
		React.forwardRef<HTMLDivElement, GggProps>(
			function Ggg(_p, ref) {
				return (
					<div ref={ref}>
						<p>Ggg works.</p>
						{_p.children}
					</div>
				);
			}
		)
	);
