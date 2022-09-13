import { motion } from "framer-motion";
import React from "react";
import { BiTime } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { FaRegCalendarAlt, FaUserAlt } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="mt-20 hero bg-[url('http://www.pixel-industry.com/html/royal-plate/img/pics/bkg-img6.jpg')]">
      <div className=" py-16 bg-base-100 w-full lg:w-4/12">
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
            <div class="relative mb-2">
              <div class="flex absolute inset-y-0 left-0 items-center pl-12 pointer-events-none">
                <span className="text-secondary">
                  <FaUserAlt />
                </span>
              </div>
              <input
                type="text"
                placeholder="Your name"
                className="input block mx-auto pl-10 p-2.5 input-bordered w-10/12 rounded-none"
              />
            </div>
            <div class="relative mb-2">
              <div class="flex absolute inset-y-0 left-0 items-center pl-12 pointer-events-none">
                <span className="text-secondary">
                  <HiOutlineMail />
                </span>
              </div>
              <input
                type="email"
                placeholder="Your email"
                className="input block mx-auto pl-10 p-2.5 input-bordered w-10/12 rounded-none"
              />
            </div>
            <div class="relative mb-2">
              <div class="flex absolute inset-y-0 left-0 items-center pl-12 pointer-events-none">
                <span className="text-secondary">
                  <FaRegCalendarAlt />
                </span>
              </div>
              <input
                type="date"
                placeholder="Type here"
                className="input block mx-auto pl-10 p-2.5 input-bordered w-10/12 rounded-none"
              />
            </div>
            <div class="relative mb-2">
              <div class="flex absolute inset-y-0 left-0 items-center pl-12 pointer-events-none">
                <span className="text-secondary">
                  <BiTime />
                </span>
              </div>
              <input
                type="time"
                placeholder="Type here"
                className="input block mx-auto pl-10 p-2.5 input-bordered w-10/12 rounded-none"
              />
            </div>
            <div class="relative mb-2">
              <div class="flex absolute inset-y-0 left-0 items-center pl-12 pointer-events-none">
                <span className="text-secondary">
                  <BsPeopleFill />
                </span>
              </div>
              <select
                type="text"
                placeholder="Type here"
                className="select block mx-auto pl-10 p-2.5 select-bordered w-10/12 rounded-none"
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
            <button className="btn rounded-none bg-[#161D27] hover:bg-secondary hover:border-secondary font-thin text-white w-10/12">
              Find A Table
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
