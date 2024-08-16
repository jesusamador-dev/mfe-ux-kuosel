import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import KSLCategoryCarousel, { KSLCategoryCarouselProps } from './KSLCategoryCarousel';

export default {
  title: 'Organismos/KSLCategoryCarousel',
  component: KSLCategoryCarousel,
  argTypes: {
    categories: { control: 'object' },
    onAddCategory: { action: 'add category' },
  },
  parameters: {
    backgrounds: {
      default: "principal",
      values: [{ name: "principal", value: "#F7F8F9" }],
    },
  }
} as Meta<KSLCategoryCarouselProps>;

const Template: StoryFn<KSLCategoryCarouselProps> = (args) => <KSLCategoryCarousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  categories: [
    { category: 'Housing', amount: '$3,570.00', percentage: '70%' },
    { category: 'Food', amount: '$990.00', percentage: '15%' },
    { category: 'Saving', amount: '$455.00', percentage: '10%' },
  ],
};
