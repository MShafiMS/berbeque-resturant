import { motion } from "framer-motion";
import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

const MainDish = () => {
  return (
    <div className="hero">
      <div className="hero-content flex flex-col lg:my-16">
        <div className="text-center">
          <p className="text-4xl font-head text-secondary">More concrete</p>
          <p className="text-4xl font-sub">MAIN DISHES</p>
          <div className="text-secondary mt-2 mb-8 w-28 mx-auto flex items-center">
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
        </div>
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
            <div className="flex flex-col gap-6 mt-8">
              <div className="lg:flex md:flex gap-4 items-center justify-between">
                <img
                  className="w-24 rounded-full mx-auto md:mx-0 lg:mb-0 md:mb-0 lg:mx-0 mb-4"
                  src="https://images.unsplash.com/photo-1561651823-34feb02250e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=854&q=80"
                  alt=""
                />
                <div className="flex items-center justify-between w-full">
                  <div>
                    <h1 className="text-lg uppercase">Food menu name</h1>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, fugit magnam!
                    </p>
                  </div>
                  <div className="border-t border-b py-6">
                    <h1 className="text-4xl font-sub text-secondary">$25</h1>
                  </div>
                </div>
              </div>
              <div className="lg:flex md:flex gap-4 items-center justify-between">
                <img
                  className="w-24 rounded-full mx-auto md:mx-0 lg:mb-0 md:mb-0 lg:mx-0 mb-4"
                  src="https://images.unsplash.com/photo-1585297099535-d5f84e833797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <div className="flex items-center justify-between w-full">
                  <div>
                    <h1 className="text-lg uppercase">Food menu name</h1>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, fugit magnam!
                    </p>
                  </div>
                  <div className="border-t border-b py-6">
                    <h1 className="text-4xl font-sub text-secondary">$27</h1>
                  </div>
                </div>
              </div>
              <div className="lg:flex md:flex gap-4 items-center justify-between">
                <img
                  className="w-24 rounded-full mx-auto md:mx-0 lg:mb-0 md:mb-0 lg:mx-0 mb-4"
                  src="https://images.unsplash.com/photo-1625943555030-fbf8c07f0817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <div className="flex items-center justify-between w-full">
                  <div>
                    <h1 className="text-lg uppercase">Food menu name</h1>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, fugit magnam!
                    </p>
                  </div>
                  <div className="border-t border-b py-6">
                    <h1 className="text-4xl font-sub text-secondary">$21</h1>
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
            <div className="flex flex-col gap-6 mt-8">
              <div className="lg:flex md:flex gap-4 items-center justify-between">
                <img
                  className="w-24 rounded-full mx-auto md:mx-0 lg:mb-0 md:mb-0 lg:mx-0 mb-4"
                  src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <div className="flex items-center justify-between w-full">
                  <div>
                    <h1 className="text-lg uppercase">Food menu name</h1>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, fugit magnam!
                    </p>
                  </div>
                  <div className="border-t border-b py-6">
                    <h1 className="text-4xl font-sub text-secondary">$24</h1>
                  </div>
                </div>
              </div>
              <div className="lg:flex md:flex gap-4 items-center justify-between">
                <img
                  className="w-24 rounded-full mx-auto md:mx-0 lg:mb-0 md:mb-0 lg:mx-0 mb-4"
                  src="https://images.unsplash.com/photo-1546039907-7fa05f864c02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <div className="flex items-center justify-between w-full">
                  <div>
                    <h1 className="text-lg uppercase">Food menu name</h1>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, fugit magnam!
                    </p>
                  </div>
                  <div className="border-t border-b py-6">
                    <h1 className="text-4xl font-sub text-secondary">$22</h1>
                  </div>
                </div>
              </div>
              <div className="lg:flex md:flex gap-4 items-center justify-between">
                <img
                  className="w-24 rounded-full mx-auto md:mx-0 lg:mb-0 md:mb-0 lg:mx-0 mb-4"
                  src="https://images.unsplash.com/photo-1633237308525-cd587cf71926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <div className="flex items-center justify-between w-full">
                  <div>
                    <h1 className="text-lg uppercase">Food menu name</h1>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, fugit magnam!
                    </p>
                  </div>
                  <div className="border-t border-b py-6">
                    <h1 className="text-4xl font-sub text-secondary">$32</h1>
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

export default MainDish;
