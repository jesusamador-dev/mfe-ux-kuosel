import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import KSLCategoryCard, { KSLCategoryCardProps } from './KSLCategoryCard';

export default {
  title: 'Moleculas/KSLCategoryCard',
  component: KSLCategoryCard,
  argTypes: {
    category: {
      control: 'select',
      options: ['housing', 'food', 'saving'],
    },
    categoryName: { control: 'text' },
    amount: { control: 'text' },
    percentage: { control: 'text' },
  },
  backgrounds: {
    default: "principal",
    values: [{ name: "principal", value: "#F7F8F9" }],
  },
} as Meta<KSLCategoryCardProps>;

const Template: StoryFn<KSLCategoryCardProps> = (args) => <KSLCategoryCard {...args} />;

export const Housing = Template.bind({});
Housing.args = {
  category: 'housing',
  amount: '$3,570.00',
  percentage: '70%',
};

export const Food = Template.bind({});
Food.args = {
  category: 'food',
  amount: '$990.00',
  percentage: '15%',
};

export const Saving = Template.bind({});
Saving.args = {
  category: 'saving',
  amount: '$455.00',
  percentage: '10%',
};
