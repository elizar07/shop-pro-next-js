import Link from 'next/link';
import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { SlBasket } from 'react-icons/sl';

import { FaRegHeart } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 bg-zinc-50 text-white">
      <div className="container w-full mx-auto flex justify-between items-center">
        <div className="header-content flex justify-between items-center gap-20">
          <div className="exclusive flex items-center cursor-pointer">
            <Link href="/" legacyBehavior>
              <a className="text-black text-2xl	font-bold	">
                <h1>Exclusive</h1>
              </a>
            </Link>
          </div>
          <div className="navbar text-black font-normal text-base flex gap-[40px]">
            <Link href="/">Home</Link>
            <Link href="/">Contact</Link>
            <Link href="/">About</Link>
            <Link href="/">Sign Up</Link>
          </div>
          <div className="flex items-center ml-10">
            {' '}
            <input
              className="header-input bg-slate-100 rounded w-[280px] text-black font-normal text-base border-2rounded-md px-4 py-2 "
              type="text"
              placeholder="What are you looking for?"
            />
            <IoSearch className="text-black size-5 font-bold left-[980px] absolute cursor-pointer" />
            <div className="text-black flex gap-4 ml-5">
              <FaRegHeart />
              <SlBasket />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
