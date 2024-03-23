// components/DemoCall.tsx
import React, { useEffect } from 'react';

const DemoCall = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="demo-call-section pt-64 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold text-white">
            Ready for take-off?
          </h1>
          <p className="mt-4 font-medium text-2xl text-gray-400">
            Schedule a free consultation today
          </p>
        </div>
        <div className="mt-16">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/mattiaastori/15min?hide_gdpr_banner=1"
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DemoCall;