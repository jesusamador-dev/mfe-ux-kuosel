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
  leftIcon: 'arrow-left',
  rightIcon: 'notifications',
  showNotificationDot: true,
};
