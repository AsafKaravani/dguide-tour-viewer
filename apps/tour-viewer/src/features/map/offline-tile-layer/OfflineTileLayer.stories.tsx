import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { OfflineTileLayer } from './OfflineTileLayer';


export default {
	title: 'Default/Offline Tile Layer',
} as ComponentMeta<typeof OfflineTileLayer>;

const Template: ComponentStory<typeof OfflineTileLayer> = (args) => (
	<OfflineTileLayer {...args} />

);

export const Default = Template.bind({});
Default.args = {

};
