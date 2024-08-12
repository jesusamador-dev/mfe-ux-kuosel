import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import KSLTransactionCard, { KSLTransactionCardProps } from './KSLTransactionCard';

export default {
  title: 'Moleculas/KSLTransactionCard',
  component: KSLTransactionCard,
  argTypes: {
    categoryIcon: { control: 'text' },
    title: { control: 'text' },
    date: { control: 'text' },
    amount: { control: 'text' },
    change: { control: 'text' },
    isPositiveChange: { control: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'principal',
      values: [
        { name: 'principal', value: '#F7F8F9' },
      ],
    },
  },
} as Meta;

const Template: StoryFn<KSLTransactionCardProps> = (args) => <KSLTransactionCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  categoryIcon: 'home',
  title: 'Amazon Prime',
  date: '25 Sep 2023',
  amount: '$800.00',
  change: '+0.31%',
  isPositiveChange: true,
};

export const NegativeChange = Template.bind({});
NegativeChange.args = {
  categoryIcon: 'home',
  title: 'Ebay Purchase',
  date: '10 Oct 2023',
  amount: '$500.00',
  change: '-1.25%',
  isPositiveChange: false,
};
