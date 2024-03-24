// components/Scheduling.tsx
import React, { useEffect } from 'react';

const Scheduling = () => {
  useEffect(() => {
    const calendarScript = document.createElement('script');
    calendarScript.src = 'https://assets.calendly.com/assets/external/widget.js';
    calendarScript.async = true;
    document.body.appendChild(calendarScript);

    const typeformScript = document.createElement('script');
    typeformScript.src = '//embed.typeform.com/next/embed.js';
    document.body.appendChild(typeformScript);

    return () => {
      document.body.removeChild(calendarScript);
      document.body.removeChild(typeformScript);
    };
  }, []);

  return (
    <div className="scheduling-section py-32 md:py-48 lg:py-64 relative flex-grow">
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(rgba(39, 221, 48, 0.2), rgba(20, 32, 23, 0.0) 68%)',
          zIndex: 0,
        }}
      />
      <div id="scheduling-section" className="px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Ready for take-off?</h2>
          <p className="mt-4 font-medium text-xl md:text-2xl text-gray-400">
            Schedule a free consultation today!
          </p>
        </div>
        <div className="mt-12 md:mt-16 flex flex-col gap-12 md:gap-16 items-center">
          <div className="min-w-full h-[700px] calendly-inline-widget px-4 sm:px-6 lg:px-8 rounded-lg"
            data-url="https://calendly.com/mattiaastori/15min?hide_gdpr_banner=1"
          />
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white">or</h2>
            <p className="mt-20 font-medium text-2xl text-gray-400">
              Get a free quote personalized for your needs
            </p>
          </div>
          <div
            data-tf-live="01HSMP1PRTX0XA74B2TQKE1P79"
            className="md:w-[600px] lg:w-[850px] justify-self-center px-2 lg:px-8 md:rounded-lg"
          /> 
          <script src="//embed.typeform.com/next/embed.js"></script>
        </div>
      </div>
    </div>
  );
};

export default Scheduling;