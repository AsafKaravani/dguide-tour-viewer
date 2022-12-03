import React from 'react';

type HeaderProps = {
	children?: React.ReactNode;
};

export const Header: React.FC<HeaderProps> =
	React.memo(
		React.forwardRef<HTMLDivElement, HeaderProps>(
			function Header(_p, ref) {
				return (
					<div ref={ref}>
						<p>Header works.</p>
						{_p.children}
					</div>
				);
			}
		)
	);
