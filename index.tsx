// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './src/components/Hero';
import Drone from './src/components/Drone';
import CaseStudies from './src/components/CaseStudies';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Hero />
    <Drone />
    <CaseStudies />
  </React.StrictMode>
);

