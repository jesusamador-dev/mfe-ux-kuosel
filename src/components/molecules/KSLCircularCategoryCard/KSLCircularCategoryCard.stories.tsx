import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import KSLCircularCategoryCard, { KSLCircularCategoryCardProps } from './KSLCircularCategoryCard';

export default {
  title: 'Moleculas/KSLCircularCategoryCard',
  component: KSLCircularCategoryCard,
  argTypes: {
    categoryIcon: { control: 'text' },
    categoryName: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<KSLCircularCategoryCardProps> = (args) => <KSLCircularCategoryCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  categoryIcon: 'shopping-cart',
  categoryName: 'Shopping',
};
