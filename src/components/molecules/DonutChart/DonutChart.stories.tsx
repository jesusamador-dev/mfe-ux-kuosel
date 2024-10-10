// src/stories/DonutChartEcharts.stories.tsx

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import DonutChart from './DonutChart';

export default {
  title: 'Gráficos/DonutChartEcharts',
  component: DonutChart,
  argTypes: {
    data: { control: 'array' },
  },
} as Meta<typeof DonutChart>;

const Template: StoryFn<typeof DonutChart> = (args) => (
  <div style={{ width: '300px', height: '300px' }}>
    <DonutChart {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  data: [
    { value: 570, name: 'Housing', itemStyle: { borderRadius: [10, 10, 0, 0], color: '#FF6B6B' } },
    { value: 240, name: 'Food', itemStyle: { borderRadius: [10, 10, 0, 0], color: '#845EC2' } },
    { value: 190, name: 'Savings', itemStyle: { borderRadius: [10, 10, 0, 0], color: '#98D8D8' } }
  ]
};
