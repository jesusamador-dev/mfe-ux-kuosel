import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import KSDonutChart, { KSLDonutChartProps } from './KSLDonutChart';

// Configuración general del story
export default {
  title: 'Moleculas/DonutChart', // Título de la categoría en Storybook
  component: KSDonutChart, // Componente a renderizar
  argTypes: {
    data: { control: { type: 'object' } }, // Control para manejar los datos como un objeto
  },
} as Meta<typeof KSDonutChart>;

// Plantilla para las variaciones del story
const Template: StoryFn<typeof KSDonutChart> = (args) => (
  <div style={{ width: '300px', height: '300px' }}>
    <KSDonutChart {...args} />
  </div>
);

// Story con datos predeterminados
export const Default = Template.bind({});
Default.args = {
  data: [
    { value: 570, name: 'Housing', itemStyle: { borderRadius: [10, 10, 0, 0], color: '#FF6B6B' } },
    { value: 240, name: 'Food', itemStyle: { borderRadius: [10, 10, 0, 0], color: '#845EC2' } },
    { value: 190, name: 'Savings', itemStyle: { borderRadius: [10, 10, 0, 0], color: '#98D8D8' } },
  ],
};
