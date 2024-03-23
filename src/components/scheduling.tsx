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
    <div className="scheduling-section pt-64 relative">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-white">Ready for take-off?</h2>
          <p className="mt-4 font-medium text-2xl text-gray-400">
            Schedule a free consultation today
          </p>
        </div>
        <div className="mt-16 flex flex-col gap-16 items-center">
          <div className="calendly-inline-widget"
            data-url="https://calendly.com/mattiaastori/15min?hide_gdpr_banner=1"
            style={{ minWidth: '100%', height: '700px' }}
          ></div>
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white">or</h2>
            <p className="mt-20 font-medium text-2xl text-gray-400">
              Get a free quote personalized for your needs
            </p>
          </div>
            <div
              data-tf-live="01HSMP1PRTX0XA74B2TQKE1P79"
              style={{ height: '100%' }}
            ></div>
          </div>
      </div>
    </div>
  );
};

export default Scheduling;