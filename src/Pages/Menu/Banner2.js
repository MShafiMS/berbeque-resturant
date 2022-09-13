import { motion } from "framer-motion";
import React from "react";
import { GiKnifeFork } from "react-icons/gi";

const Banner2 = () => {
  return (
    <>
      <div className="hero h-screen lg:h-[85vh] bg-cover bg-[url('http://www.pixel-industry.com/html/royal-plate/img/pics/bkg-img10.jpg')] bg-left">
        <div className="hero-content text-center text-neutral-content">
          <motion.div
            initial={{ y: 200 }}
            whileInView={{ y: -20 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl text-primary font-head">Special Offers</h1>
            <h1 className="my-5 text-5xl font-sub uppercase text-white">
              LUNCH & DINNER MENUS
            </h1>
            <div className="text-primary flex w-8/12 mx-auto items-center">
              <div className="w-full">
                <div className="ml-7 bg-primary h-[1px] mb-1"></div>
                <div className="bg-primary h-[1px]"></div>
              </div>
              <span className="text-3xl mx-5">
                <GiKnifeFork></GiKnifeFork>
              </span>
              <div className="w-full">
                <div className="mr-7 bg-primary h-[1px] mb-1"></div>
                <div className="bg-primary h-[1px]"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Banner2;
