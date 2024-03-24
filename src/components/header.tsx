// components/Header.tsx
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="top-0 left-0 right-0 z-50 opacity-80">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-4">
          <div className="hidden md:flex space-x-8">
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
          <div className="md:hidden">
            <button
              className="text-white hover:text-purple-500 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.293 6.293a1 1 0 011.414 0L12 10.586l4.293-4.293a1 1 0 111.414 1.414L13.414 12l4.293 4.293a1 1 0 01-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 12 6.293 7.707a1 1 0 010-1.414z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-2 py-4">
            <button
              className="text-white hover:text-purple-500 font-medium"
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
        )}
      </nav>
    </header>
  );
};

export default Header;