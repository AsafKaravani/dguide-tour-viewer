import React from 'react';

type StopDetailsProps = {
	children?: React.ReactNode;
};

export const StopDetails: React.FC =	React.memo<StopDetailsProps>(
	function StopDetails(_p) {
		return (
			<div>
				<p>Stop details works.</p>
				{_p.children}
			</div>
		);
	});
