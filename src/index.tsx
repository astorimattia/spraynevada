// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header';
import Hero from './components/hero';
import Drone from './components/drone';
import CaseStudies from './components/case_studies';
import Scheduling from './components/scheduling';
import Footer from './components/footer';
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

initParticlesEngine(async (engine) => {
  await loadSlim(engine);
});

root.render(
  <React.StrictMode>
    <div className="min-h-screen overflow-hidden flex flex-col">
      <Header />
      <Hero />
      <Drone />
      <CaseStudies />
      <Scheduling />
      <Footer />
    </div>
  </React.StrictMode>
);

