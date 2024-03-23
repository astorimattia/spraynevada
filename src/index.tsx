// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './components/hero';
import Drone from './components/drone';
import CaseStudies from './components/case_studies';
import Scheduling from './components/scheduling';
import Footer from './components/footer';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="min-h-screen overflow-hidden flex flex-col">
    <Hero />
    <Drone />
    <CaseStudies />
    <Scheduling />
    <Footer />
    </div>
  </React.StrictMode>
);

