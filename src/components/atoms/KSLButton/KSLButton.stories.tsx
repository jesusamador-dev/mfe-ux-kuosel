import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import KSLButton, { KSLButtonProps } from './KSLButton';

export default {
  title: 'Atomos/KSLButton',
  component: KSLButton,
  argTypes: {
    children: { control: 'text' },
    onClick: { action: 'clicked' },
    className: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<KSLButtonProps> = (args) => <KSLButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  className: 'button--primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  className: 'button--secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  className: 'button--primary',
  disabled: true,
};
