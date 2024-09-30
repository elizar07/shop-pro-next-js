import React from 'react';

import footerQr from '../../public/assets/img/footer QR.png';
import playMarketlogo from '../../public/assets/img/LogoplayMarket.png';
import appStorelogo from '../../public/assets/img/logo appStore.png';
import Image from 'next/image';
import { FaFacebookF } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
const Footer: React.FC = () => {
  return (
    <div className="w-full bg-black">
      <div className="container">
        <div className="px-[100px] flex justify-around py-10">
          <div className="flex flex-col gap-2">
            <h1 className="font-[500] text-[17px]">Exclusive</h1>
            <a>Subscribe</a>
            <a className="text-[12px] leading-6 font-[400]">
              Get 10% off your first order
            </a>
            <input placeholder="Enter your email" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-[500] text-[17px]">Support</h1>
              <a className="text-[12px] leading-1 font-[400]">
                111 Bijoy Sarani, Dhaka,<br /> DH 1515, Bangladesh.
              </a>
              <a className="text-[12px] leading-6 font-[400]">
                exclusive@gmail.com
              </a>
              <a className="text-[12px] leading-6 font-[400]">
                +88015-88888-9999
              </a>
          </div>
          <div className="flex flex-col gap-2 ">
            <h1 className="font-[500] text-[17px]">Account</h1>
            <a className="text-[12px] leading-6 font-[400]">My Account</a>
            <a className="text-[12px] leading-6 font-[400]">Login / Register</a>
            <a className="text-[12px] leading-6 font-[400]">Cart</a>
            <a className="text-[12px] leading-6 font-[400]">Wishlist</a>
            <a className="text-[12px] leading-6 font-[400]">Shop</a>
          </div>
          <div className="flex flex-col gap-2 ">
            <h1 className="font-[500] text-[17px]">Quick Link</h1>
            <a className="text-[12px] leading-6 font-[400]">Privacy Policy</a>
            <a className="text-[12px] leading-6 font-[400]">Terms Of Use</a>
            <a className="text-[12px] leading-6 font-[400]">FAQ</a>
            <a className="text-[12px] leading-6 font-[400]">Contact</a>
          </div>
          <div className="flex flex-col gap-2 ">
            <h1 className="font-[500] text-[17px]">Download App</h1>
            <h6 className="font-medium text-[7px] text-slate-400 leading-[18px]">
              Save $3 with App New User Only
            </h6>
            <div className="flex gap-1 cursor-pointer items-center">
              <Image src={footerQr} alt="Footer QR" width={50} height={50} />
              <div className="flex items-center gap-1 flex-col">
                <Image
                  src={playMarketlogo}
                  alt="Play Market logo"
                  width={75}
                  height={75}
                />
                <Image
                  src={appStorelogo}
                  alt="App Store logo"
                  width={75}
                  height={75}
                />
              </div>
            </div>
            <div className="flex items-center gap-5 font-thin cursor-pointer mt-5">
              <FaFacebookF />
              <FiTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
