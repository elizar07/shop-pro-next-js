import React from 'react';
import { GoChevronDown } from 'react-icons/go';

const PromoBanner: React.FC = () => {
  return (
    <div className="w-full h-12 flex items-center justify-center">
      <div className="container justify-between mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="flex justify-between">
          {' '}
          <div className="flex gap-4 items-center">
            {' '}
            <p className="text-sm flex items-center gap-1 font-medium text-white ml-[150px]">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>{' '}
            <a className="text-sm underline text-white">ShopNow</a>
          </div>
          <h1 className="flex justify-center items-center gap-1 font-normal text-sm leading-5	w-13 min-h-5">
            English <GoChevronDown />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
