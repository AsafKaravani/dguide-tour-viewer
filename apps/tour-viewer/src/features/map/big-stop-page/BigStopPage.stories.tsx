import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BigStopPage } from './BigStopPage';


export default {
	title: 'Default/BigStopPage',
} as ComponentMeta<typeof BigStopPage>;

const Template: ComponentStory<typeof BigStopPage> = (args) => (
	<BigStopPage {...args} />

);

export const Default = Template.bind({});
Default.args = {

};
