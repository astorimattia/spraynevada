// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './components/hero';
import Drone from './components/drone';
import CaseStudies from './components/case_studies';
import DemoCall from './components/demo_call';
import QuoteForm from './components/quote_form';
import Scheduling from './components/scheduling';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Hero />
    <Drone />
    <CaseStudies />
    <Scheduling />
  </React.StrictMode>
);

