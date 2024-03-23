// components/CaseStudies.tsx
import React, { useEffect } from 'react';
import { handleScroll } from '../utils/scrollUtils';
import { caseStudies } from '../data/caseStudies';

const CaseStudies = () => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="case-section pt-16 md:pt-32 lg:pt-64 relative flex-grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Case Studies
          </h1>
          <p className="mt-4 font-medium text-xl md:text-2xl text-gray-400">
            Many use cases, satisfaction guaranteed
          </p>
        </div>
        <div className="px-4 md:px-8 lg:px-36 pb-16 md:pb-24 lg:pb-36 pt-12 md:pt-16 lg:pt-24">
          <div className="grid grid-cols-1 gap-12 md:gap-16 lg:gap-20">
            {caseStudies.map((caseStudy, index) => (
              <div
                key={index}
                className="bg-black bg-opacity-40 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                  <div className="relative w-full pt-[56.25%] md:pt-0 md:h-full">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 p-8 md:p-10 lg:p-14 content-center h-full">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{caseStudy.description}</p>
                  <a
                    href={caseStudy.link}
                    className="text-blue-500 hover:text-blue-600 flex items-center"
                  >
                    Read the case study
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;