import React from 'react';

type RoutingLayerProps = {
	children?: React.ReactNode;
};

export const RoutingLayer: React.FC<RoutingLayerProps> =
	React.forwardRef<HTMLDivElement, RoutingLayerProps>(
		function RoutingLayer(_p, ref) {
			return (
				<div ref={ref}>
					<p>App router works.</p>
					{_p.children}
				</div>
			);
		});
