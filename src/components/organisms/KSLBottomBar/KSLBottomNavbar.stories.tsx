import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import KSLBottomNavbar from './KSLBottomNavbar';

export default {
  title: 'Organismos/KSLBottomNavbar',
  component: KSLBottomNavbar,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <div style={{ paddingBottom: '50px' }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: StoryFn = (args) => <KSLBottomNavbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    { name: 'Inicio', icon: 'home', path: '/' },
    { name: 'Análisis', icon: 'graph', path: '/stats' },
    { name: '', icon: 'plus', path: '/scan', isSpecial: true },
    { name: 'Metas', icon: 'graph', path: '/graph' },
    { name: 'Perfil', icon: 'profile', path: '/profile' },
  ],
};
