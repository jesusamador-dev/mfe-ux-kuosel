import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import KSLBottomNavBar, {KSLBottomNavBarProps} from './KSLBottomNavBar';

export default {
  title: 'Organismos/KSLBottomNavBar',
  component: KSLBottomNavBar,
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

const Template: StoryFn<KSLBottomNavBarProps> = (args: KSLBottomNavBarProps) => <KSLBottomNavBar {...args} />;

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

Default.parameters = {
  backgrounds: {
    default: "principal",
    values: [{ name: "principal", value: "#F7F8F9" }],
  },
};