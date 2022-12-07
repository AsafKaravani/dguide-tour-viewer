import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TourPin, TourPinProps } from '@app/shared/components/TourPin';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Map/Tour Pin',
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	component: (args: TourPinProps) => <></>,
	argTypes: {
		text: { control: 'text' },
	}
} as ComponentMeta<typeof TourPin>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TourPin> = (args) => (
	<TourPin {...args}>
		1
	</TourPin>
);

const TemplateWithIcon: ComponentStory<typeof TourPin> = (args) => (
	<TourPin {...args}>
		<i className='fa-solid fa-burger-soda' />
	</TourPin>
);


export const Default = Template.bind({});
Default.args = {
	size: 40,
};

export const DefaultWithIcon = TemplateWithIcon.bind({});
DefaultWithIcon.args = {
	size: 40,
};

export const Active = Template.bind({});
Active.args = {
	active: true,
	size: 40,
};

export const ActiveWithIcon = TemplateWithIcon.bind({});
ActiveWithIcon.args = {
	active: true,
	size: 40,
};
