import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

import SwiperCore, { Autoplay } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Slider = () => {
  return (
    <div>
      <Swiper
        pagination={{
          el: ".my-custom-pagination-div",
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero mx-8 min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
              <div className="hidden md:block lg:block w-full">
                <img
                  src="https://images.unsplash.com/photo-1556713304-7a0dfeadff38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  className="w-full lg:shadow-2xl"
                />
              </div>
              <div className="w-full">
                <h1 className="text-5xl font-head text-secondary">Catering</h1>
                <h1 className="text-4xl font-sub uppercase">Special events</h1>
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
                <p className="text-sm">
                  {" "}
                  <span className="font-bold text-xl text-secondary ml-4">
                    •
                  </span>{" "}
                  Weddings
                  <span className="font-bold text-xl text-secondary ml-4">
                    •
                  </span>{" "}
                  Anniversaires
                  <span className="font-bold text-xl text-secondary ml-4">
                    •
                  </span>{" "}
                  Baby showers
                </p>
                <p className="py-6 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sit? Corrupti sunt omnis aliquid ullam quo obcaecati laboriosam ducimus nam maxime, id maiores unde facere tempore impedit quibusdam molestias sint expedita, quisquam labore soluta assumenda saepe voluptatem necessitatibus beatae. Corporis maxime reiciendis aliquid magnam perspiciatis, nisi explicabo dicta inventore sit incidunt eos voluptate laborum, itaque iure qui nam voluptatem porro.
                </p>
                <button className="uppercase font-sub border-b border-secondary text-2xl">
                  More Details ➧
                </button>
                <div className="my-custom-pagination-div text-center mt-10" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero mx-8 min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
              <div className="hidden md:block lg:block w-full">
                <img
                  src="https://images.unsplash.com/photo-1563019880-9b2ea5d89a12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  className="w-full lg:shadow-2xl"
                />
              </div>
              <div className="w-full">
                <h1 className="text-5xl font-head text-secondary">Catering</h1>
                <h1 className="text-4xl font-sub uppercase">
                  Corporate events
                </h1>
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
                <p className="text-sm">
                  {" "}
                  <span className="font-bold text-xl text-secondary ml-4">
                    •
                  </span>{" "}
                  Weddings
                  <span className="font-bold text-xl text-secondary ml-4">
                    •
                  </span>{" "}
                  Anniversaires
                  <span className="font-bold text-xl text-secondary ml-4">
                    •
                  </span>{" "}
                  Baby showers
                </p>
                <p className="py-6 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sit? Corrupti sunt omnis aliquid ullam quo obcaecati laboriosam ducimus nam maxime, id maiores unde facere tempore impedit quibusdam molestias sint expedita, quisquam labore soluta assumenda saepe voluptatem necessitatibus beatae. Corporis maxime reiciendis aliquid magnam perspiciatis, nisi explicabo dicta inventore sit incidunt eos voluptate laborum, itaque iure qui nam voluptatem porro.
                </p>
                <button className="uppercase font-sub border-b border-secondary text-2xl">
                  More Details ➧
                </button>
                <div className="my-custom-pagination-div text-center mt-10" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero mx-8 min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
              <div className="hidden md:block lg:block w-full">
                <img
                  src="https://images.unsplash.com/photo-1573566779774-d4c597df19b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  className="w-full lg:shadow-2xl"
                />
              </div>
              <div className="w-full">
                <h1 className="text-5xl font-head text-secondary">Catering</h1>
                <h1 className="text-4xl font-sub uppercase">Social events</h1>
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
                <p className="text-sm">
                  {" "}
                  <span className="font-bold text-xl text-secondary ml-4">
                    •
                  </span>{" "}
                  Weddings
                  <span className="font-bold text-xl text-secondary ml-4">
                    •
                  </span>{" "}
                  Anniversaires
                  <span className="font-bold text-xl text-secondary ml-4">
                    •
                  </span>{" "}
                  Baby showers
                </p>
                <p className="py-6 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sit? Corrupti sunt omnis aliquid ullam quo obcaecati laboriosam ducimus nam maxime, id maiores unde facere tempore impedit quibusdam molestias sint expedita, quisquam labore soluta assumenda saepe voluptatem necessitatibus beatae. Corporis maxime reiciendis aliquid magnam perspiciatis, nisi explicabo dicta inventore sit incidunt eos voluptate laborum, itaque iure qui nam voluptatem porro.
                </p>
                <button className="uppercase font-sub border-b border-secondary text-2xl">
                  More Details ➧
                </button>
                <div className="my-custom-pagination-div text-center mt-10" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};SwiperCore.use([Autoplay]);

export default Slider;
