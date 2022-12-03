import React from 'react';

type ElementsPageProps = {
	children?: React.ReactNode;
};

export const ElementsPage: React.FC<ElementsPageProps> =
	React.memo(
		React.forwardRef<HTMLDivElement, ElementsPageProps>(
			function ElementsPage(_p, ref) {
				return (
					<div ref={ref}>
						<p>Elements page works.</p>
						{_p.children}
					</div>
				);
			}
		)
	);
