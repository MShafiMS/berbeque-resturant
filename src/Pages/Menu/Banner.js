import { motion } from "framer-motion";
import React from "react";

const Banner = () => {
  return (
    <>
      <div
        className="hero h-screen lg:h-[90vh] bg-center"
        style={{
          backgroundImage: `url("http://www.pixel-industry.com/html/royal-plate/img/page-titles/page-title-2.jpg")`,
        }}
      >
        <motion.div
          initial={{ y: 200 }}
          whileInView={{ y: -10 }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="hero-content text-center text-neutral-content"
        >
          <div>
            <h1 className="text-6xl text-primary font-head">
              Delicious Cousine
            </h1>
            <h1 className="my-5 text-6xl font-sub uppercase text-white">
              DISCOVER THE MENU
            </h1>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Banner;
