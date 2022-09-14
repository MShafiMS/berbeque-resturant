import { motion } from "framer-motion";
import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

const LunchDinner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex flex-col lg:my-16">
        <div className="lg:flex gap-8 lg:mx-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.1,
              duration: 200,
            }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl font-main">LUNCH MENUS</h1>
            <div className="text-secondary my-2 w-16 flex items-center">
              <span className="mr-2">
                <GoPrimitiveDot></GoPrimitiveDot>
              </span>
              <div className="w-full">
                <div className="bg-secondary h-[1px]"></div>
              </div>
            </div>
            <div className="flex flex-col gap-6 mt-8">
              <div className="lg:flex md:flex gap-4 items-center justify-between">
                <img
                  className="w-24 rounded-full mx-auto md:mx-0 lg:mb-0 md:mb-0 lg:mx-0 mb-4"
                  src="https://images.unsplash.com/photo-1585238342070-61e1e768b1ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <div className="flex items-center justify-between w-full">
                  <div>
                    <h1 className="text-lg uppercase">Food menu name</h1>
                    <p className="text-sm">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Voluptates perferendis vel nulla.
                    </p>
                  </div>
                  <div className="border-t border-b py-6">
                    <h1 className="text-4xl font-sub text-secondary">$15</h1>
                  </div>
                </div>
              </div>
              <div className="lg:flex md:flex gap-4 items-center justify-between">
                <img
                  className="w-24 rounded-full mx-auto md:mx-0 lg:mb-0 md:mb-0 lg:mx-0 mb-4"
                  src="https://images.unsplash.com/photo-1603903631889-b5f3ba4d5b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <div className="flex items-center justify-between w-full">
                  <div>
                    <h1 className="text-lg uppercase">Food menu name</h1>
                    <p className="text-sm">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Voluptates perferendis vel nulla.
                    </p>
                  </div>
                  <div className="border-t border-b py-6">
                    <h1 className="text-4xl font-sub text-secondary">$12</h1>
                  </div>
                </div>
              </div>
              <div className="lg:flex md:flex gap-4 items-center justify-between">
                <img
                  className="w-24 rounded-full mx-auto md:mx-0 lg:mb-0 md:mb-0 lg:mx-0 mb-4"
                  src="https://images.unsplash.com/photo-1625943554275-826250826b2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <div className="flex items-center justify-between w-full">
                  <div>
                    <h1 className="text-lg uppercase">Food menu name</h1>
                    <p className="text-sm">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Voluptates perferendis vel nulla.
                    </p>
                  </div>
                  <div className="border-t border-b py-6">
                    <h1 className="text-4xl font-sub text-secondary">$17</h1>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              duration: 200,
            }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl font-main">DINNER MENUS</h1>
            <div className="text-secondary my-2 w-16 flex items-center">
              <span className="mr-2">
                <GoPrimitiveDot></GoPrimitiveDot>
              </span>
              <div className="w-full">
                <div className="bg-secondary h-[1px]"></div>
              </div>
            </div>
            <div className="flex flex-col gap-6 mt-8">
              <div className="lg:flex md:flex gap-4 items-center justify-between">
                <img
                  className="w-24 rounded-full mx-auto md:mx-0 lg:mb-0 md:mb-0 lg:mx-0 mb-4"
                  src="https://images.unsplash.com/photo-1527997921830-de1cf1f9b430?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=907&q=80"
                  alt=""
                />
                <div className="flex items-center justify-between w-full">
                  <div>
                    <h1 className="text-lg uppercase">Food menu name</h1>
                    <p className="text-sm">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Voluptates perferendis vel nulla.
                    </p>
                  </div>
                  <div className="border-t border-b py-6">
                    <h1 className="text-4xl font-sub text-secondary">$15</h1>
                  </div>
                </div>
              </div>
              <div className="lg:flex md:flex gap-4 items-center justify-between">
                <img
                  className="w-24 rounded-full mx-auto md:mx-0 lg:mb-0 md:mb-0 lg:mx-0 mb-4"
                  src="https://images.unsplash.com/photo-1625943913273-54d24dda7197?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <div className="flex items-center justify-between w-full">
                  <div>
                    <h1 className="text-lg uppercase">Food menu name</h1>
                    <p className="text-sm">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Voluptates perferendis vel nulla.
                    </p>
                  </div>
                  <div className="border-t border-b py-6">
                    <h1 className="text-4xl font-sub text-secondary">$12</h1>
                  </div>
                </div>
              </div>
              <div className="lg:flex md:flex gap-4 items-center justify-between">
                <img
                  className="w-24 rounded-full mx-auto md:mx-0 lg:mb-0 md:mb-0 lg:mx-0 mb-4"
                  src="https://images.unsplash.com/photo-1606214306048-a148c5942180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <div className="flex items-center justify-between w-full">
                  <div>
                    <h1 className="text-lg uppercase">Food menu name</h1>
                    <p className="text-sm">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Voluptates perferendis vel nulla.
                    </p>
                  </div>
                  <div className="border-t border-b py-6">
                    <h1 className="text-4xl font-sub text-secondary">$17</h1>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LunchDinner;
