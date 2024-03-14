import React from 'react';

function Hero() {
  return (
    <div className="relative w-full max-w-6xl h-screen mx-auto">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="text-center">
          <div className="text-black text-opacity-0 text-7xl font-bold leading-[84px] bg-purple-600 bg-clip-text">
            Spray Smarter
          </div>
          <div className="text-black text-opacity-0 text-7xl font-bold leading-[84px] bg-purple-600 bg-clip-text">
            With Drone Application
          </div>
        </div>
      </div>
      <div className="absolute w-full max-w-xl h-[464.10px] left-[24.5rem] top-[368px] mx-auto">
        <div className="absolute flex-col justify-center items-center gap-[15.64px] inline-flex w-[75.68px] left-[13.875rem] top-[416px]">
          <div className="text-white text-opacity-40 text-sm font-medium leading-none">Learn more</div>
          <div className="w-4 h-4 relative origin-top-left rotate-90 flex-col justify-start items-start flex"></div>
        </div>
        <div className="absolute bg-white bg-opacity-90 rounded-md shadow border border-black border-opacity-5 justify-center items-center inline-flex pl-[13px] pr-[13.29px] pt-[8.50px] pb-[9.50px] left-[11.625rem] top-[350px]">
          <div className="text-black text-sm font-medium leading-none tracking-tight">Get started today</div>
        </div>
        <div className="absolute opacity-60 justify-center items-center inline-flex pb-[14.50px] left-0 top-[277px]">
          <div className="text-center text-white text-[22px] font-medium leading-7">Take better care of your crops and increase efficiency with precise aerial spraying</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
