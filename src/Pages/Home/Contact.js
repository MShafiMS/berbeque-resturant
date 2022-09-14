import { motion } from "framer-motion";
import React from "react";
import { BiTime } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { FaRegCalendarAlt, FaUserAlt } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="lg:mx-12 my-20">
      <div className="flex">
        <div className="w-11/12 hidden lg:block">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </div>
        <div className="w-full hero">
          <div className="text-center w-full">
            <h1 className="text-secondary font-head text-4xl">Reservation</h1>
            <h1 className="font-sub text-4xl">BOOK YOUR TABLE</h1>
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
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, duration: 300 }}
              viewport={{ once: true }}
            >
              <div className="grid lg:grid-cols-1 md:grid-cols-2">
                <div class="relative mb-2">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-8 md:pl-8 lg:pl-12 pointer-events-none">
                    <span className="text-secondary">
                      <FaUserAlt />
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="input block mx-auto pl-10 p-2.5 input-bordered lg:w-10/12 w-11/12 rounded-none"
                  />
                </div>
                <div class="relative mb-2">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-8 md:pl-8 lg:pl-12 pointer-events-none">
                    <span className="text-secondary">
                      <HiOutlineMail />
                    </span>
                  </div>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="input block mx-auto pl-10 p-2.5 input-bordered lg:w-10/12 w-11/12 rounded-none"
                  />
                </div>
                <div class="relative mb-2">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-8 md:pl-8 lg:pl-12 pointer-events-none">
                    <span className="text-secondary">
                      <FaRegCalendarAlt />
                    </span>
                  </div>
                  <input
                    type="date"
                    placeholder="Type here"
                    className="input block mx-auto pl-10 p-2.5 input-bordered lg:w-10/12 w-11/12 rounded-none"
                  />
                </div>
                <div class="relative mb-2">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-8 md:pl-8 lg:pl-12 pointer-events-none">
                    <span className="text-secondary">
                      <BiTime />
                    </span>
                  </div>
                  <input
                    type="time"
                    placeholder="Type here"
                    className="input block mx-auto pl-10 p-2.5 input-bordered lg:w-10/12 w-11/12 rounded-none"
                  />
                </div>
                <div class="relative mb-2">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-8 md:pl-8 lg:pl-12 pointer-events-none">
                    <span className="text-secondary">
                      <BsPeopleFill />
                    </span>
                  </div>
                  <select
                    type="text"
                    placeholder="Type here"
                    className="select block mx-auto pl-10 p-2.5 select-bordered lg:w-10/12 w-11/12 rounded-none"
                  >
                    <option disabled selected>
                      0 People
                    </option>
                    <option>1 People</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4 People</option>
                    <option>5 People</option>
                  </select>
                </div>
                <button className="btn mx-auto rounded-none bg-[#161D27] hover:bg-secondary hover:border-secondary font-thin text-white lg:w-10/12 w-11/12">
                  Find A Table
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="w-11/12 hidden lg:block">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
