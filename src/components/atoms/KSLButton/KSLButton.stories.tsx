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
} as Meta<KSLButtonProps>;

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

Secondary.parameters = {
  backgrounds: {
    default: 'principal',
    values: [
      { name: 'principal', value: '#F45D2D' },
    ],
  },
};

export const Transparent = Template.bind({});
Transparent.args = {
  children: 'Transparent Button',
  className: 'button--transparent',
};

Transparent.parameters = {
  backgrounds: {
    default: 'principal',
    values: [
      { name: 'principal', value: '#F45D2D' },
    ],
  },
};

export const Bordered = Template.bind({});
Bordered.args = {
  children: 'Bordered Button',
  className: 'button--bordered',
};

Bordered.parameters = {
  backgrounds: {
    default: 'principal',
    values: [
      { name: 'principal', value: '#FFFFFF' },
    ],
  },
};

export const DisabledPrimary = Template.bind({});
DisabledPrimary.args = {
  children: 'Disabled Button',
  disabled: true,
};
