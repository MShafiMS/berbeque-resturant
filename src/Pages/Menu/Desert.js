import { motion } from "framer-motion";
import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

const Desert = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex flex-col lg:mb-16">
          <motion.img
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
          />
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
                    className="w-24 mx-auto md:mx-0 lg:mb-0 md:mb-0 lg:mx-0 mb-4"
                    src="http://www.pixel-industry.com/html/royal-plate/img/pics/menu-item-16.png"
                    alt=""
                  />
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <h1 className="text-lg">CHOCOLATE & ORANGE PLATE</h1>
                      <p className="text-sm">
                        Dark melted chocolate, juicy orange, sugar, lemon juice,
                        vanilla sticks
                      </p>
                    </div>
                    <div className="border-t border-b py-6">
                      <h1 className="text-5xl font-head text-secondary">$10</h1>
                    </div>
                  </div>
                </div>
                <div className="lg:flex md:flex gap-4 items-center justify-between">
                  <img
                    className="w-24 mx-auto md:mx-0 lg:mb-0 md:mb-0 lg:mx-0 mb-4"
                    src="http://www.pixel-industry.com/html/royal-plate/img/pics/menu-item-17.png"
                    alt=""
                  />
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <h1 className="text-lg">JAMAICAN STRAWBERRY CAKE</h1>
                      <p className="text-sm">
                        Strawberry, golden syrup, brown sugar, cream cheese,
                        cinnamon
                      </p>
                    </div>
                    <div className="border-t border-b py-6">
                      <h1 className="text-5xl font-head text-secondary">$11</h1>
                    </div>
                  </div>
                </div>
                <div className="lg:flex md:flex gap-4 items-center justify-between">
                  <img
                    className="w-24 mx-auto md:mx-0 lg:mb-0 md:mb-0 lg:mx-0 mb-4"
                    src="http://www.pixel-industry.com/html/royal-plate/img/pics/menu-item-18.png"
                    alt=""
                  />
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <h1 className="text-lg">ILE FLOTTANTE</h1>
                      <p className="text-sm">
                        Vanilla pod, rhubard, golden caster sugar, orange, milk,
                        double cream
                      </p>
                    </div>
                    <div className="border-t border-b py-6">
                      <h1 className="text-5xl font-head text-secondary">$12</h1>
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
                    className="w-24 mx-auto md:mx-0 lg:mb-0 md:mb-0 lg:mx-0 mb-4"
                    src="http://www.pixel-industry.com/html/royal-plate/img/pics/menu-item-19.png"
                    alt=""
                  />
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <h1 className="text-lg">PANNA COTTA</h1>
                      <p className="text-sm">
                        Milk, powdered gelatin, whipping cream, honey, sugar,
                        salt, fresh berries
                      </p>
                    </div>
                    <div className="border-t border-b py-6">
                      <h1 className="text-5xl font-head text-secondary">$12</h1>
                    </div>
                  </div>
                </div>
                <div className="lg:flex md:flex gap-4 items-center justify-between">
                  <img
                    className="w-24 mx-auto md:mx-0 lg:mb-0 md:mb-0 lg:mx-0 mb-4"
                    src="http://www.pixel-industry.com/html/royal-plate/img/pics/menu-item-20.png"
                    alt=""
                  />
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <h1 className="text-lg">TASTY TIRAMISU CAKE</h1>
                      <p className="text-sm">
                        Egg yolks, sugar, milk, mascarpone cheese, coffee,
                        brandy, cocoa powder, chocolate
                      </p>
                    </div>
                    <div className="border-t border-b py-6">
                      <h1 className="text-5xl font-head text-secondary">$10</h1>
                    </div>
                  </div>
                </div>
                <div className="lg:flex md:flex gap-4 items-center justify-between">
                  <img
                    className="w-24 mx-auto md:mx-0 lg:mb-0 md:mb-0 lg:mx-0 mb-4"
                    src="http://www.pixel-industry.com/html/royal-plate/img/pics/menu-item-21.png"
                    alt=""
                  />
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <h1 className="text-lg">TANGERINE & VANILLA CUP</h1>
                      <p className="text-sm">
                        Tangerine, vanilla sticks, milk, brown sugar, double
                        cream
                      </p>
                    </div>
                    <div className="border-t border-b py-6">
                      <h1 className="text-5xl font-head text-secondary">$11</h1>
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
