import { motion } from "framer-motion";
import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

const Starters = () => {
  return (
    <div className="hero">
      <div className="hero-content flex flex-col mt-10">
        <div className="text-center">
          <p className="text-4xl font-head text-secondary">For Start</p>
          <p className="text-4xl font-sub">STARTERS</p>
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
          <p className="my-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            corrupti maiores placeat. Architecto dolorum autem, ex officia
            eligendi laboriosam, ad deleniti mollitia ullam minima et tempore
            libero quas sequi iste! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Sit, omnis?
          </p>
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
            <h1 className="text-3xl font-main">SOUPS</h1>
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
                  src="https://images.unsplash.com/photo-1625535608282-8f181a38f9e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <div className="flex items-center justify-between w-full">
                  <div>
                    <h1 className="text-lg uppercase">Food menu name</h1>
                    <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem, ipsum. </p>
                  </div>
                  <div className="border-t border-b py-6">
                    <h1 className="text-4xl font-sub text-secondary">$15</h1>
                  </div>
                </div>
              </div>
              <div className="lg:flex md:flex gap-4 items-center justify-between">
                <img
                  className="w-24 rounded-full mx-auto md:mx-0 lg:mb-0 md:mb-0 lg:mx-0 mb-4"
                  src="https://images.unsplash.com/photo-1626200419537-f07108a01aac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=924&q=80"
                  alt=""
                />
                <div className="flex items-center justify-between w-full">
                  <div>
                    <h1 className="text-lg uppercase">Food menu name</h1>
                    <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem, ipsum. , vegetable soup</p>
                  </div>
                  <div className="border-t border-b py-6">
                    <h1 className="text-4xl font-sub text-secondary">$12</h1>
                  </div>
                </div>
              </div>
              <div className="lg:flex md:flex gap-4 items-center justify-between">
                <img
                  className="w-24 rounded-full mx-auto md:mx-0 lg:mb-0 md:mb-0 lg:mx-0 mb-4"
                  src="https://images.unsplash.com/photo-1543363364-98d2b51b47fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <div className="flex items-center justify-between w-full">
                  <div>
                    <h1 className="text-lg uppercase">Food menu name</h1>
                    <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem, ipsum. r, persley, cheese</p>
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
            <h1 className="text-3xl font-main">SALADS</h1>
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
                  src="https://images.unsplash.com/photo-1562629609-49c10e58c2a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29iYiUyMHNhbGFkfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <div className="flex items-center justify-between w-full">
                  <div>
                    <h1 className="text-lg uppercase">Food menu name</h1>
                    <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem, ipsum. do, tomato, cheese, buttermilk</p>
                  </div>
                  <div className="border-t border-b py-6">
                    <h1 className="text-4xl font-sub text-secondary">$15</h1>
                  </div>
                </div>
              </div>
              <div className="lg:flex md:flex gap-4 items-center justify-between">
                <img
                  className="w-24 rounded-full mx-auto md:mx-0 lg:mb-0 md:mb-0 lg:mx-0 mb-4"
                  src="https://images.unsplash.com/photo-1656853834420-51980b12a920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <div className="flex items-center justify-between w-full">
                  <div>
                    <h1 className="text-lg uppercase">Food menu name</h1>
                    <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem, ipsum.</p>
                  </div>
                  <div className="border-t border-b py-6">
                    <h1 className="text-4xl font-sub text-secondary">$12</h1>
                  </div>
                </div>
              </div>
              <div className="lg:flex md:flex gap-4 items-center justify-between">
                <img
                  className="w-24 rounded-full mx-auto md:mx-0 lg:mb-0 md:mb-0 lg:mx-0 mb-4"
                  src="https://images.unsplash.com/photo-1604909052743-94e838986d24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <div className="flex items-center justify-between w-full">
                  <div>
                    <h1 className="text-lg uppercase">Food menu name</h1>
                    <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem, ipsum. </p>{" "}
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

export default Starters;
