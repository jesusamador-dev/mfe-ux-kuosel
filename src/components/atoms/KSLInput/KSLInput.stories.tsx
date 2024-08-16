import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import KSLInput, { KSLInputProps } from './KSLInput';

export default {
  title: 'Atomos/KSLInput',
  component: KSLInput,
  argTypes: {
    label: { control: 'text' },
    type: { control: 'text' },
    value: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
    icon: { control: 'text' },
    onChange: { action: 'changed' },
  },
} as Meta<KSLInputProps>;

const Template: StoryFn<KSLInputProps> = (args) => <KSLInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Full Name',
  placeholder: 'Enter your full name',
  icon: 'profile',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Full Name',
  placeholder: 'Enter your full name',
  error: 'This field is required',
  icon: 'profile',
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password',
  icon: 'lock',
};

export const Email = Template.bind({});
Email.args = {
  label: 'Email',
  type: 'email',
  placeholder: 'Enter your email',
  icon: 'envelope',
};
