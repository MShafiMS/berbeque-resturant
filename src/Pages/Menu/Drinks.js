import { motion } from "framer-motion";
import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

const Drinks = () => {
  return (
    <div className="hero text-[#0B0E13]">
      <div className="hero-content flex flex-col lg:my-16">
        <div className="lg:flex gap-8 w-full lg:mx-10">
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
            className="w-full"
          >
            <h1 className="text-3xl font-sub">WINE BY THE GLASS (100 ML)</h1>
            <div className="text-secondary my-2 w-16 flex items-center">
              <span className="mr-2">
                <GoPrimitiveDot></GoPrimitiveDot>
              </span>
              <div className="w-full">
                <div className="bg-secondary h-[1px]"></div>
              </div>
            </div>
            <div>
              <div className="my-4">
                <h1 className="text-lg">CHAMPAGNE</h1>
                <div>
                  <div className="flex items-end mt-3 gap-1 w-full">
                    <h2 className="lg:w-max w-full lg:whitespace-nowrap">
                      NV Veuve Clicquot Brut Rose
                    </h2>
                    <span className="w-full border-b-2 mb-3 border-dashed border-neutral"></span>
                    <p className="text-2xl font-head text-secondary">$29</p>
                  </div>
                  <p className="text-sm w-8/12">
                    Elegant and sensual wine from Reims, France, exquisite taste
                    and sensual idensity.
                  </p>
                </div>
                <div>
                  <div className="flex items-end mt-3 gap-1 w-full">
                    <h2 className="lg:w-max w-full lg:whitespace-nowrap">
                      NV Veuve Clicquot Brut Rose
                    </h2>
                    <span className="w-full border-b-2 mb-3 border-dashed border-neutral"></span>
                    <p className="text-2xl font-head text-secondary">$29</p>
                  </div>
                  <p className="text-sm w-8/12">
                    Elegant and sensual wine from Reims, France, exquisite taste
                    and sensual idensity.
                  </p>
                </div>
              </div>
              <div className="my-4">
                <h1 className="text-lg">STILL WHITE</h1>
                <div>
                  <div className="flex items-end mt-2 gap-1 w-full">
                    <h2 className="lg:w-max w-full lg:whitespace-nowrap">
                      A. Retief Sauvignon Blanc
                    </h2>
                    <span className="w-full border-b-2 mb-3 border-dashed border-neutral"></span>
                    <p className="text-2xl font-head text-secondary">$29</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-end gap-1 w-full">
                    <h2 className="lg:w-max w-full lg:whitespace-nowrap">
                      Peter Zemmer Pinot Grigio
                    </h2>
                    <span className="w-full border-b-2 mb-3 border-dashed border-neutral"></span>
                    <p className="text-2xl font-head text-secondary">$29</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-end gap-1 w-full">
                    <h2 className="lg:w-max w-full lg:whitespace-nowrap">
                      Mount Pleasant Lovedale Semillon
                    </h2>
                    <span className="w-full border-b-2 mb-3 border-dashed border-neutral"></span>
                    <p className="text-2xl font-head text-secondary">$29</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-end gap-1 w-full">
                    <h2 className="lg:w-max w-full lg:whitespace-nowrap">
                      Toolangi Pauls Chardonnay
                    </h2>
                    <span className="w-full border-b-2 mb-3 border-dashed border-neutral"></span>
                    <p className="text-2xl font-head text-secondary">$29</p>
                  </div>
                </div>
              </div>
              <div className="my-4">
                <h1 className="text-lg">STILL RED</h1>
                <div>
                  <div className="flex items-end mt-2 gap-1 w-full">
                    <h2 className="lg:w-max w-full lg:whitespace-nowrap">Torbeck Celts Shiraz</h2>
                    <span className="w-full border-b-2 mb-3 border-dashed border-neutral"></span>
                    <p className="text-2xl font-head text-secondary">$29</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-end gap-1 w-full">
                    <h2 className="lg:w-max w-full lg:whitespace-nowrap">Caillard Mataro</h2>
                    <span className="w-full border-b-2 mb-3 border-dashed border-neutral"></span>
                    <p className="text-2xl font-head text-secondary">$29</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-end gap-1 w-full">
                    <h2 className="lg:w-max w-full lg:whitespace-nowrap">
                      Barbaresco Cascina Ghercina Riserva Nebbiolo
                    </h2>
                    <span className="w-full border-b-2 mb-3 border-dashed border-neutral"></span>
                    <p className="text-2xl font-head text-secondary">$29</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-end gap-1 w-full">
                    <h2 className="lg:w-max w-full lg:whitespace-nowrap">
                      Between Five Bells Negroamaro
                    </h2>
                    <span className="w-full border-b-2 mb-3 border-dashed border-neutral"></span>
                    <p className="text-2xl font-head text-secondary">$29</p>
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
            className="w-full"
          >
            <h1 className="text-3xl font-sub">HALF BOTTLES (375 ML)</h1>
            <div className="text-secondary my-2 w-16 flex items-center">
              <span className="mr-2">
                <GoPrimitiveDot></GoPrimitiveDot>
              </span>
              <div className="w-full">
                <div className="bg-secondary h-[1px]"></div>
              </div>
            </div>
            <div>
              <div className="my-4">
                <h1 className="text-lg">HALF BOTTLES SPARKLING</h1>
                <div>
                  <div className="flex items-end mt-2 gap-1 w-full">
                    <h2 className="lg:w-max w-full lg:whitespace-nowrap">
                      NV Adami Garbel Prosecco Brut
                    </h2>
                    <span className="w-full border-b-2 mb-3 border-dashed border-neutral"></span>
                    <p className="text-2xl font-head text-secondary">$29</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-end gap-1 w-full">
                    <h2 className="lg:w-max w-full lg:whitespace-nowrap">NV Thienot Brut</h2>
                    <span className="w-full border-b-2 mb-3 border-dashed border-neutral"></span>
                    <p className="text-2xl font-head text-secondary">$29</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-end gap-1 w-full">
                    <h2 className="lg:w-max w-full lg:whitespace-nowrap">
                      NV Veuve Clicquot Brut
                    </h2>
                    <span className="w-full border-b-2 mb-3 border-dashed border-neutral"></span>
                    <p className="text-2xl font-head text-secondary">$29</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-end gap-1 w-full">
                    <h2 className="lg:w-max w-full lg:whitespace-nowrap">MV Krug Grande Cuvee</h2>
                    <span className="w-full border-b-2 mb-3 border-dashed border-neutral"></span>
                    <p className="text-2xl font-head text-secondary">$29</p>
                  </div>
                </div>
              </div>
              <div className="my-4">
                <h1 className="text-lg">HALF BOTTLES WHITE</h1>
                <div>
                  <div className="flex items-end mt-2 gap-1 w-full">
                    <h2 className="lg:w-max w-full lg:whitespace-nowrap">
                      Bella Ridge Chenin Blanc
                    </h2>
                    <span className="w-full border-b-2 mb-3 border-dashed border-neutral"></span>
                    <p className="text-2xl font-head text-secondary">$29</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-end gap-1 w-full">
                    <h2 className="lg:w-max w-full lg:whitespace-nowrap">
                      Vouvray Clos de Bourg Sec Huet
                    </h2>
                    <span className="w-full border-b-2 mb-3 border-dashed border-neutral"></span>
                    <p className="text-2xl font-head text-secondary">$29</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-end gap-1 w-full">
                    <h2 className="lg:w-max w-full lg:whitespace-nowrap">
                      Vouvray Le Mont Sec Huet
                    </h2>
                    <span className="w-full border-b-2 mb-3 border-dashed border-neutral"></span>
                    <p className="text-2xl font-head text-secondary">$29</p>
                  </div>
                </div>
              </div>
              <div className="my-4">
                <h1 className="text-lg">HALF BOTTLES RED</h1>
                <div>
                  <div className="flex items-end mt-2 gap-1 w-full">
                    <h2 className="lg:w-max w-full lg:whitespace-nowrap">Mount Mary Pinot Noir</h2>
                    <span className="w-full border-b-2 mb-3 border-dashed border-neutral"></span>
                    <p className="text-2xl font-head text-secondary">$29</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-end gap-1 w-full">
                    <h2 className="lg:w-max w-full lg:whitespace-nowrap">Curly Flat Pinot Noir</h2>
                    <span className="w-full border-b-2 mb-3 border-dashed border-neutral"></span>
                    <p className="text-2xl font-head text-secondary">$29</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-end gap-1 w-full">
                    <h2 className="lg:w-max w-full lg:whitespace-nowrap">
                      Brunello di Montalcino La Chiuse
                    </h2>
                    <span className="w-full border-b-2 mb-3 border-dashed border-neutral"></span>
                    <p className="text-2xl font-head text-secondary">$29</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-end gap-1 w-full">
                    <h2 className="lg:w-max w-full lg:whitespace-nowrap">
                      Barollo Massolino Serralunga d’Alba
                    </h2>
                    <span className="w-full border-b-2 mb-3 border-dashed border-neutral"></span>
                    <p className="text-2xl font-head text-secondary">$29</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-end gap-1 w-full">
                    <h2 className="lg:w-max w-full lg:whitespace-nowrap">Bella Ridge Grenache</h2>
                    <span className="w-full border-b-2 mb-3 border-dashed border-neutral"></span>
                    <p className="text-2xl font-head text-secondary">$29</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-end gap-1 w-full">
                    <h2 className="lg:w-max w-full lg:whitespace-nowrap">
                      Rusden Black Guts Shiraz
                    </h2>
                    <span className="w-full border-b-2 mb-3 border-dashed border-neutral"></span>
                    <p className="text-2xl font-head text-secondary">$29</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <button className="btn btn-wide rounded-none font-thin text-white bg-[#0B0E13] hover:bg-secondary hover:border-none">
          Download wine list
        </button>
      </div>
    </div>
  );
};

export default Drinks;
