import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './components/hero';
import Drone from './components/drone';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Hero />
    <Drone />
  </React.StrictMode>
);
