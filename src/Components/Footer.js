import React from "react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { GrFacebookOption, GrTwitter } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <footer className="footer footer-center p-10 bg-[#0B0E13] text-white bg-no-repeat relative bg-[url('http://www.pixel-industry.com/html/royal-plate/img/pics/footer-bkg-img1.png'),_url('http://www.pixel-industry.com/html/royal-plate/img/pics/footer-bkg-img2.png')] bg-[position:bottom_left,_bottom_right]">
        <div className="text-gray-400">
          <img
            src="https://raw.githubusercontent.com/MShafiMS/admission/d012ae18ebac5f6b6a2e94d3cecfdbe6d1eb4c97/bbq.svg"
            className="w-48"
            alt=""
          />
          <p>22 Royal Street, Sundance Avenue, New York</p>
          <p>
            <span className="text-primary">RESERVATIONS NUMBER:</span> +00 25
            854 78521
          </p>
          <p>
            <span className="text-primary">WORKING HOURS:</span> <br /> MON-
            FRI: 08:00 AM - 10:00 PM SAT - SUN: 10:00 AM - 11:00 PM
          </p>
        </div>
        <div className="w-full flex gap-4 lg:flex-row flex-col justify-between">
          <div className="flex gap-3">
            <button className="p-3 rounded-full bg-[#1d2026] border-none text-white text-xl hover:text-primary">
              <GrFacebookOption />
            </button>
            <button className="p-3 rounded-full bg-[#1d2026] border-none text-white text-xl hover:text-primary">
              <GrTwitter />
            </button>
            <button className="p-3 rounded-full bg-[#1d2026] border-none text-white text-xl hover:text-primary">
              <AiFillInstagram />
            </button>
            <button className="p-3 rounded-full bg-[#1d2026] border-none text-white text-xl hover:text-primary">
              <AiFillLinkedin />
            </button>
          </div>
          <div className="w-full card-actions justify-end">
            <input
              type="text"
              placeholder="Subscribe to our newsletter feed:"
              className="input h-10 w-full max-w-xs bg-[#1d2026] rounded-none"
            />
            <button className="h-10 bg-primary px-8 uppercase font-bold text-black rounded-none lg:mx-0 mx-auto">
              Submit
            </button>
          </div>
        </div>
      </footer>
      <footer className="footer items-center lg:px-16 p-6 bg-[#0B0E13] border-t-[0.5px] border-[#1d2026] text-[#686f77]">
        <div className="items-center grid-flow-col mx-auto">
          <p className="text-sm">© Berbeque 2016. All rights reserved.</p>
        </div>
        <div className="grid-flow-col hidden lg:block gap-4 md:place-self-center md:justify-self-end">
          <a className="hover:text-primary cursor-pointer">HOME</a>
          <a className="hover:text-primary cursor-pointer">ABOUT</a>
          <a className="hover:text-primary cursor-pointer">MENU</a>
          <a className="hover:text-primary cursor-pointer">RESERVATIONS</a>
          <a className="hover:text-primary cursor-pointer">CATERING</a>
          <a className="hover:text-primary cursor-pointer">GALLERY</a>
          <a className="hover:text-primary cursor-pointer">BLOG</a>
          <a className="hover:text-primary cursor-pointer">CONTACT</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
