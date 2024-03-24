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
import { SparklesCore } from './components/sparkles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className="min-h-screen overflow-hidden flex flex-col relative">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="fixed inset-0 w-full h-full z-0"
        particleColor="#FFFFFF"
      />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Drone />
        <CaseStudies />
        <Scheduling />
        <Footer />
      </div>
    </div>
  </React.StrictMode>
);

