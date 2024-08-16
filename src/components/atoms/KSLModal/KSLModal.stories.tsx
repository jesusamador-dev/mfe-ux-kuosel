import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import KSLModal from './KSLModal';

export default {
  title: 'Atomos/KSLModal',
  component: KSLModal,
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' },
    children: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<any> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  const handleClose = () => {
    setIsOpen(false);
    args.onClose();
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <KSLModal {...args} isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  children: (
    <>
      <h2>Congratulations!</h2>
      <p>Your account is ready to use.</p>
      <button onClick={() => alert('Continue clicked')}>Continue</button>
    </>
  ),
};
