import { motion } from "framer-motion";
import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import Modall from "./Modall";

const Offer = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content w-11/12 flex-col lg:flex-row">
        <div className="w-full">
          <div className="grid grid-cols-2 w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
              viewport={{ once: true }}
              className="hero h-[250px]"
              style={{
                backgroundImage: `url("http://www.pixel-industry.com/html/royal-plate/img/gallery/gallery-1s.jpg")`,
              }}
            >
              <div className="hero-content text-center duration-300 hover:bg-opacity-60 hover:bg-black w-full h-full text-neutral-content">
                <div className="max-w-md">
                  <label
                    htmlFor="my-modal-3"
                    className="modal-button btn bg-opacity-0 border-none hover:bg-opacity-0 hover:border-none hover:rotate-45"
                  >
                    <div className="w-full">
                      <div className="w-[50px] bg-white h-[1px]"></div>
                      <div className="w-[50px] rotate-90 bg-white h-[1px]"></div>
                    </div>
                  </label>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              viewport={{ once: true }}
              className="hero h-[250px]"
              style={{
                backgroundImage: `url("http://www.pixel-industry.com/html/royal-plate/img/gallery/gallery-2s.jpg")`,
              }}
            >
              <div className="hero-content text-center duration-300 hover:bg-opacity-60 hover:bg-black w-full h-full text-neutral-content">
                <div className="max-w-md">
                  <label
                    htmlFor="my-modal-3"
                    className="modal-button btn bg-opacity-0 border-none hover:bg-opacity-0 hover:border-none hover:rotate-45"
                  >
                    <div className="w-full">
                      <div className="w-[50px] bg-white h-[1px]"></div>
                      <div className="w-[50px] rotate-90 bg-white h-[1px]"></div>
                    </div>
                  </label>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
              viewport={{ once: true }}
              className="hero h-[250px]"
              style={{
                backgroundImage: `url("http://www.pixel-industry.com/html/royal-plate/img/gallery/gallery-3s.jpg")`,
              }}
            >
              <div className="hero-content text-center duration-300 hover:bg-opacity-60 hover:bg-black w-full h-full text-neutral-content">
                <div className="max-w-md">
                  <label
                    htmlFor="my-modal-3"
                    className="modal-button btn bg-opacity-0 border-none hover:bg-opacity-0 hover:border-none hover:rotate-45"
                  >
                    <div className="w-full">
                      <div className="w-[50px] bg-white h-[1px]"></div>
                      <div className="w-[50px] rotate-90 bg-white h-[1px]"></div>
                    </div>
                  </label>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
              viewport={{ once: true }}
              className="hero h-[250px]"
              style={{
                backgroundImage: `url("http://www.pixel-industry.com/html/royal-plate/img/gallery/gallery-4s.jpg")`,
              }}
            >
              <div className="hero-content text-center duration-300 hover:bg-opacity-60 hover:bg-black w-full h-full text-neutral-content">
                <div className="max-w-md">
                  <label
                    htmlFor="my-modal-3"
                    className="modal-button btn bg-opacity-0 border-none hover:bg-opacity-0 hover:border-none hover:rotate-45"
                  >
                    <div className="w-full">
                      <div className="w-[50px] bg-white h-[1px]"></div>
                      <div className="w-[50px] rotate-90 bg-white h-[1px]"></div>
                    </div>
                  </label>
                </div>
              </div>
            </motion.div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal bg-black bg-opacity-80">
              <div className="modal-box bg-opacity-0 rounded-none p-0 max-w-xl relative">
                <label
                  htmlFor="my-modal-3"
                  className="btn-sm text-gray-400 font-bold btn-square absolute -right-4 top-2"
                >
                  ✕
                </label>
                <div className="mt-9">
                  <Modall></Modall>
                </div>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full mx-4"
        >
          <h1 className="text-5xl font-head text-secondary">From the menu</h1>
          <h1 className="text-4xl font-sub">SPECIAL OFFERS</h1>
          <div className="text-secondary my-2 w-16 flex items-center">
            <span className="mr-2">
              <GoPrimitiveDot></GoPrimitiveDot>
            </span>
            <div className="w-full">
              <div className="bg-secondary h-[1px]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-6 mt-8">
            <div className="flex gap-6 items-center">
              <img
                src="http://www.pixel-industry.com/html/royal-plate/img/pics/menu-item-01.png"
                alt=""
              />
              <div>
                <h1 className="text-lg">ROYAL BREAKFAST</h1>
                <p className="text-sm">
                  Fried eggs, fried bacon, toast, fresh tomato salad, cup of
                  coffee or tea
                </p>
              </div>
              <div className="border-t border-b py-6">
                <h1 className="text-5xl font-head text-secondary">$15</h1>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <img
                src="http://www.pixel-industry.com/html/royal-plate/img/pics/menu-item-02.png"
                alt=""
              />
              <div>
                <h1 className="text-lg">ROYAL BRUNCH</h1>
                <p className="text-sm">
                  Warm chicken wings, portobello mushrooms, fresh mozzarella,
                  coffe or tea
                </p>
              </div>
              <div className="border-t border-b py-6">
                <h1 className="text-5xl font-head text-secondary">$22</h1>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <img
                src="http://www.pixel-industry.com/html/royal-plate/img/pics/menu-item-03.png"
                alt=""
              />
              <div>
                <h1 className="text-lg">ROYAL DINNER</h1>
                <p className="text-sm">
                  Grilled Beaf steak, roasted red potatos with rosemary,
                  mashrooms sause, vine
                </p>
              </div>
              <div className="border-t border-b py-6">
                <h1 className="text-5xl font-head text-secondary">$28</h1>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Offer;
