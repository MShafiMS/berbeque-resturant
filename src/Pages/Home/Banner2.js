import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

const Banner2 = () => {
  return (
    <div
      className="lg:p-16 p-6"
      style={{
        backgroundImage: `url('http://www.pixel-industry.com/html/royal-plate/img/pics/bkg-img1.jpg')`,
      }}
    >
      <div className="flex flex-row gap-6 w-full">
        <img
          className="my-12 w-72 hidden lg:block"
          src="http://www.pixel-industry.com/html/royal-plate/img/pics/spices-left.png"
          alt=""
        />
        <div
          className="w-full hero border-[16px] border-[#131822] shadow-lg shadow-black"
          style={{
            backgroundImage: `url('http://www.pixel-industry.com/html/royal-plate/img/pics/bkg-img2.png')`,
          }}
        >
          <div className="text-center m-10 lg:m-0 lg:mx-14">
            <p className="text-4xl font-head text-secondary">Our story</p>
            <p className="text-4xl font-sub">LOVE FOR FOOD</p>
            <div className="text-secondary my-2 w-28 mx-auto flex items-center">
              <div className="w-full">
                <div className="bg-secondary h-[1px]"></div>
              </div>
              <span className="mx-2">
                <GoPrimitiveDot></GoPrimitiveDot>
              </span>
              <div className="w-full">
                <div className="bg-secondary h-[1px]"></div>
              </div>
            </div>
            <p className="mt-6">
              Welcome. This is Royal plate. Elegant & sophisticated restaurant
              template. Royal plate offers different home page layouts with
              smart and unique design, showcasing beautifully designed elements
              every restaurant website should have. Smooth animations, fast
              loading and engaging user experience are just some of the features
              this template offers. So, give it a try and dive into a world of
              royal restaurant websites.
            </p>
          </div>
        </div>
        <img
          className="my-12 w-72 hidden lg:block"
          src="http://www.pixel-industry.com/html/royal-plate/img/pics/spices-right.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner2;
