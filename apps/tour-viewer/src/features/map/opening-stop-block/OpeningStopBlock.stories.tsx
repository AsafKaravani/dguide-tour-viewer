import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { OpeningStopBlock } from './OpeningStopBlock';


export default {
	title: 'Default/Opening Stop Block',
} as ComponentMeta<typeof OpeningStopBlock>;

const Template: ComponentStory<typeof OpeningStopBlock> = (args) => (
	<OpeningStopBlock {...args} />

);

export const Default = Template.bind({});
Default.args = {

};
