// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './components/Hero';
import Drone from './components/Drone';
import CaseStudies from './components/CaseStudies';

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

