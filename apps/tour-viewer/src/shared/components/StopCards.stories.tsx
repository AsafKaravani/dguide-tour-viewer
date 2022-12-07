import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StopCard } from '@app/shared/components/StopCard';


export default {
	title: 'Map/Stop Card',
} as ComponentMeta<typeof StopCard>;

const Template: ComponentStory<typeof StopCard> = (args) => (
	<StopCard {...args} />

);


export const Default = Template.bind({});
Default.args = {
	sx: { width: 400 },
	title: 'House of Simon the Tanner',
	categories: [
		'Historic',
		'Religous',
	]
};

export const WithIcons = Template.bind({});
WithIcons.args = {
	sx: { width: 400 },
	title: 'House of Simon the Tanner',
	categories: [
		<>
			<i className='fa-solid fa-books mr-1.5' />
			Historic
		</>,
		<>
			<i className='fa-solid fa-hands-praying mr-1.5' />
			Religous
		</>,
	]
};