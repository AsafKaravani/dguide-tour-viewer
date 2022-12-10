import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TourLayer } from './TourLayer';


export default {
	title: 'Default/Tour Layer',
} as ComponentMeta<typeof TourLayer>;

const Template: ComponentStory<typeof TourLayer> = (args) => (
	<TourLayer {...args} />

);

export const Default = Template.bind({});
Default.args = {

};
