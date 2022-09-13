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
              <div className="flex gap-6 items-center">
                <img
                  className="hidden lg:block"
                  src="http://www.pixel-industry.com/html/royal-plate/img/pics/menu-item-10.png"
                  alt=""
                />
                <div>
                  <h1 className="text-lg">GRILLED CHICKEN KEBABS</h1>
                  <p className="text-sm">
                    Skinless chicken breast, black pepper, red pepper, passata,
                    ginger, garlic
                  </p>
                </div>
                <div className="border-t border-b py-6">
                  <h1 className="text-5xl font-head text-secondary">$25</h1>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <img
                  className="hidden lg:block"
                  src="http://www.pixel-industry.com/html/royal-plate/img/pics/menu-item-11.png"
                  alt=""
                />
                <div>
                  <h1 className="text-lg">BBQ BEEF SHORT RIBS</h1>
                  <p className="text-sm">
                    Short ribs, olive oil, caraway seeds, yoghurt, carrots,
                    onions, white cabbage
                  </p>
                </div>
                <div className="border-t border-b py-6">
                  <h1 className="text-5xl font-head text-secondary">$27</h1>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <img
                  className="hidden lg:block"
                  src="http://www.pixel-industry.com/html/royal-plate/img/pics/menu-item-12.png"
                  alt=""
                />
                <div>
                  <h1 className="text-lg">SOUTHERN FIRED CHICKEN</h1>
                  <p className="text-sm">
                    Chicken thighs, chicken drumsticks, potatoes, ayenne pepper
                  </p>
                </div>
                <div className="border-t border-b py-6">
                  <h1 className="text-5xl font-head text-secondary">$21</h1>
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
              <div className="flex gap-6 items-center">
                <img
                  className="hidden lg:block"
                  src="http://www.pixel-industry.com/html/royal-plate/img/pics/menu-item-13.png"
                  alt=""
                />
                <div>
                  <h1 className="text-lg">SICILIAN-STYLE TUNA CARPACCIO</h1>
                  <p className="text-sm">
                    Tuna steak, rose vine, red chilli, lemon, fresh basil, fresh
                    dill, garlic, olive oil
                  </p>
                </div>
                <div className="border-t border-b py-6">
                  <h1 className="text-5xl font-head text-secondary">$24</h1>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <img
                  className="hidden lg:block"
                  src="http://www.pixel-industry.com/html/royal-plate/img/pics/menu-item-14.png"
                  alt=""
                />
                <div>
                  <h1 className="text-lg">TURKEY TONNATO</h1>
                  <p className="text-sm">
                    Turkey breast, red chilli, olive oil, tinned tuna, lemon,
                    black pepper, red wine vinegar
                  </p>
                </div>
                <div className="border-t border-b py-6">
                  <h1 className="text-5xl font-head text-secondary">$22</h1>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <img
                  className="hidden lg:block"
                  src="http://www.pixel-industry.com/html/royal-plate/img/pics/menu-item-15.png"
                  alt=""
                />
                <div>
                  <h1 className="text-lg">NEXT LEVEL STEAK</h1>
                  <p className="text-sm">
                    Flank skirt steak, onion, butter, olive oil, red wine
                    vinegar
                  </p>
                </div>
                <div className="border-t border-b py-6">
                  <h1 className="text-5xl font-head text-secondary">$32</h1>
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
