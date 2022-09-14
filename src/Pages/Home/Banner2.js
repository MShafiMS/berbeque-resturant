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
        <div className="w-8/12 hidden lg:block">
          <img
            className="my-12 w-full hidden lg:block"
            src="https://www.freepnglogos.com/uploads/food-png/food-plate-png-transparent-image-pngpix-14.png"
            alt=""
          />
          <img
            className="my-12 w-full hidden lg:block"
            src="https://www.freepnglogos.com/uploads/food-png/food-sutherland-foodservice-12.png"
            alt=""
          />
        </div>
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
              Lx minus fuga earum aut animi enim delectus provident reiciendis in, totam, voluptatum doloremque facilis eos velit beatae molestias eum laborum, vero a dicta aliquid veritatis labore libero itaque! Temporibus vero incidunt animi veritatis sapiente deserunt, voluptas, aspernatur reiciendis iusto, quaerat cumque distinctio! Odit nostrum delectus iste, ad voluptatibus repellat tempora adipisci voluptatum distinctio. Tenetur recusandae eligendi, dolore officiis sint odit adipisci deserunt earum?
            </p>
          </div>
        </div>
        <div className="w-8/12 hidden lg:block">
          <img
            className="my-12 w-full hidden lg:block"
            src="https://www.freepnglogos.com/uploads/food-png/food-home-nanoosh-20.png"
            alt=""
          />
          <img
            className="my-12 w-full hidden lg:block"
            src="https://www.freepnglogos.com/uploads/food-png/food-plate-png-transparent-image-pngpix-2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner2;
