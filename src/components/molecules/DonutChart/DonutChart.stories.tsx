import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DonutChart, { DonutChartProps } from './DonutChart';

export default {
  title: 'Moleculas/DonutChart',
  component: DonutChart,
  argTypes: {
    data: {
      control: 'object',
      description: 'Datos para el gráfico de dona, incluyendo valor, nombre y estilo del item.',
    },
    zIndexOrder: {
      control: 'radio',
      options: ['desc', 'asc'],
      description: 'Orden de los datos en el eje z (ascendente o descendente).',
    },
  },
} as Meta<typeof DonutChart>;

const Template: StoryFn<DonutChartProps> = (args) => <DonutChart {...args} />;

export const EjemploBasico = Template.bind({});
EjemploBasico.args = {
  data: [
    {
      value: 4000,
      name: 'Categoría A',
      itemStyle: {
        borderRadius: [10, 10, 10, 10],
        color: '#FF6384',
      },
    },
    {
      value: 3500,
      name: 'Categoría B',
      itemStyle: {
        borderRadius: [10, 10, 10, 10],
        color: '#36A2EB',
      },
    },
    {
      value: 2000,
      name: 'Categoría C',
      itemStyle: {
        borderRadius: [10, 10, 10, 10],
        color: '#FFCE56',
      },
    },
    {
      value: 1000,
      name: 'Categoría D',
      itemStyle: {
        borderRadius: [10, 10, 10, 10],
        color: '#4BC0C0',
      },
    },
  ],
};

export const OrdenAscendente = Template.bind({});
OrdenAscendente.args = {
  ...EjemploBasico.args,
};