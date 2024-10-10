import React from 'react';
import StylesProvider from './providers/StylesProvider';
import { createRoot } from "react-dom/client";

const App: React.FC = () => {
  return (
    <StylesProvider>
      <h1>Hola Mundo</h1>
    </StylesProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(<App />);
