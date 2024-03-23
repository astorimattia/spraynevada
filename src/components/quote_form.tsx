// components/QuoteForm.tsx
import React, { useEffect } from 'react';

const QuoteForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="quote-form-section pt-64 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-white">or</h2>
          <p className="mt-4 font-medium text-2xl text-gray-400">
            Get a free quote personalized for your needs
          </p>
        </div>
        <div className="mt-16">
          <div
            data-tf-live="01HSMP1PRTX0XA74B2TQKE1P79"
            style={{ width: '100%', height: '600px' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;