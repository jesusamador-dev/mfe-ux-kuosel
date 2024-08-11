import React from 'react';
import '@/styles/main.scss';

interface StylesProviderProps {
  children: React.ReactNode;
}

const StylesProvider: React.FC<StylesProviderProps> = ({ children }) => {
  return <>{children}</>;
};

export default StylesProvider;
