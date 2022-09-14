import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import slide2 from "../../Assets/slide2.png";
import slide1 from "../../Assets/sllide1.png";

const Banner = () => {
  return (
    <>
      <div
        className="banner-container h-[90vh] bg-fixed bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1527224538127-2104bb71c51b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')]"
      >
        
        <div className="banner-content h-[90vh] flex flex-row items-center gap-10 py-24 justify-between text-center text-neutral-content">
          <div className="w-7/12 self-start hidden lg:block">
            <img src={slide1} className='w-96' alt="" />
          </div>
          <div className="w-full">
            <h1 className="text-5xl text-primary drop-shadow-xl font-head">Discover</h1>
            <h1 className="mb-5 text-5xl font-sub uppercase text-white">
              Berbeque
            </h1>
            <div className="text-primary flex items-center">
              <div className="w-full">
                <div className="ml-7 bg-primary h-[1px] mb-1"></div>
                <div className="bg-primary h-[1px]"></div>
              </div>
              <span className="text-5xl">
                <GiKnifeFork></GiKnifeFork>
              </span>
              <div className="w-full">
                <div className="mr-7 bg-primary h-[1px] mb-1"></div>
                <div className="bg-primary h-[1px]"></div>
              </div>
            </div>
            <div className="mt-4">
              <p className="uppercase text-white">Opening Hours</p>
              <div className="text-sm mt-4">
                <p className="my-1">
                  <span className="text-white">Monday - Friday:</span> 08:00
                  A.M. - 23:00 P.M.
                </p>
                <p className="my-1">
                  <span className="text-white">Weekends:</span> 08:00 A.M. -
                  02:00 P.M.
                </p>
              </div>
            </div>
          </div>
          <div className="w-7/12 self-start hidden lg:block">
            <img src={slide2} className='w-96' alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
