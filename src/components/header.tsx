// components/Header.tsx
import React from 'react';

const Header = () => {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div>
            <h1 className="text-white font-bold text-2xl">Spray Nevada</h1>
          </div>
          <div className="flex space-x-8">
            <button
              className="text-white hover:text-purple-500 font-bold"
              onClick={() => handleClick('case-studies-section')}
            >
              Case Studies
            </button>
            <button
              className="text-white hover:text-purple-500 font-bold"
              onClick={() => handleClick('scheduling-section')}
            >
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;