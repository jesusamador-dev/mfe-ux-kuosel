import React from 'react';
import StylesProvider from './providers/StylesProvider';
import KslButton from '@/components/atoms/KSLButton/KSLButton';

const App: React.FC = () => {
  return (
    <StylesProvider>
      <h1>Hola Mundo</h1>
    </StylesProvider>
  );
};

export default App;
