import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import KSLIcon from './KSLIcon';

export default {
  title: 'Atomos/Icon',
  component: KSLIcon,
  argTypes: {
    name: { 
      control: 'select',
      options: [
        'activity', 'apple', 'arrow-left', 'email', 'eye', 'facebook', 'google', 
        'graph', 'home', 'lock', 'mastercard', 'notification-active', 'notification', 
        'profile', 'scanner', 'search', 'visa'
      ],
    },
    size: { control: 'text' },
    color: { control: 'color' },
    className: { control: 'text' },
  },
} as Meta<typeof KSLIcon>;

const Template: StoryFn<typeof KSLIcon> = (args) => <KSLIcon {...args} />;

export const IconExample = Template.bind({});
IconExample.args = {
  name: 'google',
  size: '2rem',
};
