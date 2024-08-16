import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import KSLModalCongratulations from './KSLModalCongratulations';

export default {
  title: 'Templates/KSLModalCongratulations',
  component: KSLModalCongratulations,
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' },
    title: { control: 'text' },
    message: { control: 'text' },
    buttonText: { control: 'text' },
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
      <KSLModalCongratulations {...args} isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  title: 'Congratulations!',
  message: 'Your account is ready to use. You will be redirected to the home page in a few seconds.',
  buttonText: 'Continue',
};
