import { motion } from "framer-motion";
import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

const Desert = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex flex-col lg:mb-16">
          {/* <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.1,
              duration: 200,
            }}
            viewport={{ once: true }}
            src="https://i.ibb.co/2KNHgqc/4e4306fnutellalasgana-min-1.png"
            className="mx-auto "
            alt=""
          /> */}
          <div className="text-center">
            <p className="text-4xl font-head text-secondary">Tasty</p>
            <p className="text-4xl font-sub">DESERTS</p>
            <div className="text-secondary mt-2 lg:mb-8 w-28 mx-auto flex items-center">
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
                    src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <h1 className="text-lg uppercase">Food menu name</h1>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita minus enim a?
                      </p>
                    </div>
                    <div className="border-t border-b py-6">
                      <h1 className="text-4xl font-sub text-secondary">$10</h1>
                    </div>
                  </div>
                </div>
                <div className="lg:flex md:flex gap-4 items-center justify-between">
                  <img
                    className="w-24 rounded-full mx-auto md:mx-0 lg:mb-0 md:mb-0 lg:mx-0 mb-4"
                    src="https://images.unsplash.com/photo-1628838617281-065549dd37fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <h1 className="text-lg uppercase">Food menu name</h1>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita minus enim a?
                      </p>
                    </div>
                    <div className="border-t border-b py-6">
                      <h1 className="text-4xl font-sub text-secondary">$11</h1>
                    </div>
                  </div>
                </div>
                <div className="lg:flex md:flex gap-4 items-center justify-between">
                  <img
                    className="w-24 rounded-full mx-auto md:mx-0 lg:mb-0 md:mb-0 lg:mx-0 mb-4"
                    src="https://images.unsplash.com/photo-1472555950005-7fa40ece7f6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=937&q=80"
                    alt=""
                  />
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <h1 className="text-lg uppercase">Food menu name</h1>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita minus enim a?
                      </p>
                    </div>
                    <div className="border-t border-b py-6">
                      <h1 className="text-4xl font-sub text-secondary">$12</h1>
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
                    src="https://images.unsplash.com/photo-1609271873730-ed73bb15b9a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <h1 className="text-lg uppercase">Food menu name</h1>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita minus enim a?
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
                    src="https://images.unsplash.com/photo-1570781148825-b9c37b9531e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <h1 className="text-lg uppercase">Food menu name</h1>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita minus enim a?
                      </p>
                    </div>
                    <div className="border-t border-b py-6">
                      <h1 className="text-4xl font-sub text-secondary">$10</h1>
                    </div>
                  </div>
                </div>
                <div className="lg:flex md:flex gap-4 items-center justify-between">
                  <img
                    className="w-24 rounded-full mx-auto md:mx-0 lg:mb-0 md:mb-0 lg:mx-0 mb-4"
                    src="https://images.unsplash.com/photo-1517306085770-871ff74b2274?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=915&q=80"
                    alt=""
                  />
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <h1 className="text-lg uppercase">Food menu name</h1>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita minus enim a?
                      </p>
                    </div>
                    <div className="border-t border-b py-6">
                      <h1 className="text-4xl font-sub text-secondary">$11</h1>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desert;
