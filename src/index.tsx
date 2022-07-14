import React from 'react';
import ReactDOM from 'react-dom/client';
import { HeroesProvider } from './context';
import { DotaApp } from './DotaApp';
import './scss/main.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HeroesProvider>
      <DotaApp />
    </HeroesProvider>
  </React.StrictMode>
);