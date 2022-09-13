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
            <h1 className="text-3xl font-sub">LUNCH MENUS</h1>
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
                  className="hidden lg:block"
                  src="http://www.pixel-industry.com/html/royal-plate/img/pics/menu-item-04.png"
                  alt=""
                />
                <div>
                  <h1 className="text-lg">SPINACH SOUP</h1>
                  <p className="text-sm">
                    Milk, eggs, spinach, garlic, onion, potato, chicken stock,
                    lemon
                  </p>
                </div>
                <div className="border-t border-b py-6">
                  <h1 className="text-5xl font-head text-secondary">$15</h1>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <img
                  className="hidden lg:block"
                  src="http://www.pixel-industry.com/html/royal-plate/img/pics/menu-item-05.png"
                  alt=""
                />
                <div>
                  <h1 className="text-lg">TOMATO SOUP</h1>
                  <p className="text-sm">
                    Tomatos, onion, carrot, celery, olive oil, tomato puree,
                    sugar, vegetable soup
                  </p>
                </div>
                <div className="border-t border-b py-6">
                  <h1 className="text-5xl font-head text-secondary">$12</h1>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <img
                  className="hidden lg:block"
                  src="http://www.pixel-industry.com/html/royal-plate/img/pics/menu-item-06.png"
                  alt=""
                />
                <div>
                  <h1 className="text-lg">MUSHROOM SOUP</h1>
                  <p className="text-sm">
                    Mushrooms, olive oil, garlic, onion, sea salt, black pepper,
                    persley, cheese
                  </p>
                </div>
                <div className="border-t border-b py-6">
                  <h1 className="text-5xl font-head text-secondary">$17</h1>
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
            <h1 className="text-3xl font-sub">DINNER MENUS</h1>
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
                  className="hidden lg:block"
                  src="http://www.pixel-industry.com/html/royal-plate/img/pics/menu-item-07.png"
                  alt=""
                />
                <div>
                  <h1 className="text-lg">CRACKING COBB SALAD</h1>
                  <p className="text-sm">
                    Chicken thighs, pepper, olive oil, salt, pancetta, avocado,
                    tomato, cheese, buttermilk
                  </p>
                </div>
                <div className="border-t border-b py-6">
                  <h1 className="text-5xl font-head text-secondary">$15</h1>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <img
                  className="hidden lg:block"
                  src="http://www.pixel-industry.com/html/royal-plate/img/pics/menu-item-08.png"
                  alt=""
                />
                <div>
                  <h1 className="text-lg">WALDORF SALAD</h1>
                  <p className="text-sm">
                    Grapes, lemon, olive oil, sea salt, black pepper, walnuts,
                    yoghurt, celery
                  </p>
                </div>
                <div className="border-t border-b py-6">
                  <h1 className="text-5xl font-head text-secondary">$12</h1>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <img
                  className="hidden lg:block"
                  src="http://www.pixel-industry.com/html/royal-plate/img/pics/menu-item-09.png"
                  alt=""
                />
                <div>
                  <h1 className="text-lg">SPRING QUICHE</h1>
                  <p className="text-sm">
                    Asparagus, spinach, onion, milk, cheese, black pepper
                  </p>
                </div>
                <div className="border-t border-b py-6">
                  <h1 className="text-5xl font-head text-secondary">$17</h1>
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
