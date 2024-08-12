import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import KSLTopBar, { KSLTopBarProps } from './KSLTopBar';

export default {
  title: 'Organismos/KSLTopBar',
  component: KSLTopBar,
} as Meta<KSLTopBarProps>;

const Template: StoryFn<KSLTopBarProps> = (args) => <KSLTopBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Acc Balance',
};

Default.parameters = {
  backgrounds: {
    default: "principal",
    values: [{ name: "principal", value: "#F7F8F9" }],
  },
};