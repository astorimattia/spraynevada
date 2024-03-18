// components/CaseStudies.tsx
import React, { useEffect } from 'react';
import { handleScroll } from '../utils/scrollUtils'

const CaseStudies = () => {

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="case-section pt-72 relative">
      {/* <div className="absolute -top-20 left-0 w-full h-72 bg-gradient-to-b from-black to-transparent"></div> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Case Studies
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Many use cases, satisfaction guaranteed
          </p>
        </div>
        <div className="pt-36">
          <div className="grid grid-cols-1 gap-16">

            {/* Case Study 1 */}
            <div className="bg-black bg-opacity-40 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/2 p-14">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Wheat Weed Control
                </h3>
                <p className="text-gray-400 mb-6">
                  Drone was used for effective weed control in wheat fields, covering 53.3 hectares in Shandong, China. The operation involved precise spraying of herbicides, resulting in successful weed eradication without harming the wheat.
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-600 flex items-center">
                  Read the case study
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="md:w-1/2">
                <img src="case1.webp" alt="Case Study 1" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-black bg-opacity-40 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img src="case2.webp" alt="Case Study 2" className="w-full h-full object-cover" />
              </div>
              <div className="md:w-1/2 p-14">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Weed Control for Winter Wheat
                </h3>
                <p className="text-gray-400 mb-6">
                  This article provides tips on UAV plant protection for winter wheat, including weed classification, herbicide selection, and precautions for spraying. It emphasizes the importance of timing, weather conditions, and herbicide choice for effective weed control.
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-600 flex items-center">
                  Read the case study
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-black bg-opacity-40 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/2 p-14">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Controlling Corn Borers
                </h3>
                <p className="text-gray-400 mb-6">
                  An outbreak of corn borers in Bole City, Xinjiang, China was controlled using DJI's MG-1S drone for aerial spraying over 2,735 acres, resulting in an 80% mortality rate of the pests.
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-600 flex items-center">
                  Read the case study
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="md:w-1/2">
                <img src="case3.webp" alt="Case Study 1" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;