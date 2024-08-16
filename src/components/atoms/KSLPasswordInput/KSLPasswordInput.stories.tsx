import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import KSLPasswordInput, { KSLPasswordInputProps } from './KSLPasswordInput';

export default {
  title: 'Atomos/KSLPasswordInput',
  component: KSLPasswordInput,
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    placeholder: { control: 'text' },
    onChange: { action: 'changed' },
    error: { control: 'text' },
  },
} as Meta<typeof KSLPasswordInput>;

const Template: StoryFn<KSLPasswordInputProps> = (args) => <KSLPasswordInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Password',
  value: '',
  placeholder: 'Enter your password',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Password',
  value: '',
  placeholder: 'Enter your password',
  error: 'This field is required',
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: 'Password',
  value: 'password123',
  placeholder: 'Enter your password',
};
