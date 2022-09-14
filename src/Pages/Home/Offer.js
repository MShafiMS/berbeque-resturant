import { motion } from "framer-motion";
import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import Modall from "./Modall";

const Offer = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content w-11/12 flex-col lg:flex-row">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-0 md:grid-cols-2 w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
              viewport={{ once: true }}
              className="hero md:w-[360px] md:h-[360px] h-72 lg:h-[270px] lg:w-[270px] mx-auto"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1604909052868-dd2ef1e53daa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80")`,
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
              className="hero md:w-[360px] md:h-[360px] h-72 lg:h-[270px] lg:w-[270px] mx-auto"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1625943912749-7f75dc0d7a01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80")`,
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
              className="hero md:w-[360px] md:h-[360px] h-72 lg:h-[270px] lg:w-[270px] mx-auto"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1604296703995-97dc3ded7f9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=935&q=80")`,
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
              className="hero md:w-[360px] md:h-[360px] h-72 lg:h-[270px] lg:w-[270px] mx-auto"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1596097650412-42feabbcff42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80")`,
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
                  className="btn-sm cursor-pointer text-gray-400 font-bold btn-square absolute -right-4 top-2"
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
          <h1 className="text-4xl font-noto">SPECIAL OFFERS</h1>
          <div className="text-secondary my-2 w-16 flex items-center justify-between">
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
                src="https://images.unsplash.com/photo-1607923722386-1c7b1d86f70a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80"
                alt=""
                className="w-24 rounded-full mx-auto md:mx-0 lg:mb-0 md:mb-0 lg:mx-0 mb-4"
              />
              <div className="flex items-center justify-between w-full">
                <div className="w-full">
                  <h1 className="text-lg uppercase">Royal food menu</h1>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maxime vel quasi!
                  </p>
                </div>
                <div className="border-t border-b py-6">
                  <h1 className="text-4xl font-sub text-secondary">$15</h1>
                </div>
              </div>
            </div>
            <div className="lg:flex md:flex gap-4 items-center justify-between">
              <img
                src="https://images.unsplash.com/photo-1614287681681-592fe09d78a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
                className="w-24 rounded-full mx-auto md:mx-0 lg:mb-0 md:mb-0 lg:mx-0 mb-4"
              />
              <div className="flex items-center justify-between w-full">
                <div className="w-full">
                  <h1 className="text-lg uppercase">Royal food menu</h1>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maxime vel quasi!
                  </p>
                </div>
                <div className="border-t border-b py-6">
                  <h1 className="text-4xl font-sub text-secondary">$22</h1>
                </div>
              </div>
            </div>
            <div className="lg:flex md:flex gap-4 items-center justify-between">
              <img
                src="https://images.unsplash.com/photo-1605926637512-c8b131444a4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
                className="w-24 rounded-full mx-auto md:mx-0 lg:mb-0 md:mb-0 lg:mx-0 mb-4"
              />
              <div className="flex items-center justify-between w-full">
                <div className="w-full">
                  <h1 className="text-lg uppercase">Royal food menu</h1>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maxime vel quasi!
                  </p>
                </div>
                <div className="border-t border-b py-6">
                  <h1 className="text-4xl font-sub text-secondary">$28</h1>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Offer;
