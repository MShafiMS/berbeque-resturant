import { motion } from "framer-motion";
import React, { useRef } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const scrollRef = useRef(null);
  let activeClassName = "text-primary bg-opacity-0";
  let deactiveClassName = "bg-opacity-0";
  let activeClass = "text-primary";
  let deactiveClass = "hidden";
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef }}
      >
        <div className="flex w-full items-center justify-between px-10 fixed z-50 text-white">
          <div>
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Home</a>
                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Parent
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <div>
              <a className="btn btn-ghost normal-case text-xl">
                <img
                  src="http://www.pixel-industry.com/html/royal-plate/img/logo.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal uppercase">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? activeClassName : deactiveClassName
                  }
                >
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive ? activeClass : deactiveClass
                    }
                  >
                    <GoPrimitiveDot />
                  </NavLink>
                  Home
                </NavLink>
              </li>
              <li>
                <a>About</a>
              </li>
              <li tabIndex={0}>
                <NavLink
                  to={"/menu"}
                  className={({ isActive }) =>
                    isActive ? activeClassName : deactiveClassName
                  }
                >
                  <NavLink
                    to={"/menu"}
                    className={({ isActive }) =>
                      isActive ? activeClass : deactiveClass
                    }
                  >
                    <GoPrimitiveDot />
                  </NavLink>
                  Menu
                </NavLink>
                <ul className="menu bg-[#252525] text-sm normal-case w-72">
                  <li className="py-1 hover:bg-[#363636] hover:text-primary border-b border-[#3c3c3c]">
                    <Link to={"/menu"}>Menu</Link>
                  </li>
                  <li className="py-1 hover:bg-[#363636] hover:text-primary border-b border-[#3c3c3c]">
                    <a>Item 2</a>
                  </li>
                  <li className="py-1 hover:bg-[#363636] hover:text-primary border-b border-[#3c3c3c]">
                    <a>Item 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>RESERVATIONS</a>
              </li>
              <li>
                <a>CATERING</a>
              </li>
              <li>
                <a>GALLERY</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
      <motion.din
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        viewport={{ root: scrollRef }}
      >
        <div className="flex bg-black bg-opacity-80 w-full items-center justify-between gap-7 px-10 fixed z-50 text-white">
          <div>
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Parent
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <div>
              <a className="btn btn-ghost normal-case text-xl">
                <img
                  src="http://www.pixel-industry.com/html/royal-plate/img/logo.png"
                  alt=""
                  className="h-12"
                />
              </a>
            </div>
          </div>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal uppercase">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? activeClassName : deactiveClassName
                  }
                >
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive ? activeClass : deactiveClass
                    }
                  >
                    <GoPrimitiveDot />
                  </NavLink>
                  Home
                </NavLink>
              </li>
              <li>
                <a>About</a>
              </li>
              <li tabIndex={0}>
                <NavLink
                  to={"/menu"}
                  className={({ isActive }) =>
                    isActive ? activeClassName : deactiveClassName
                  }
                >
                  <NavLink
                    to={"/menu"}
                    className={({ isActive }) =>
                      isActive ? activeClass : deactiveClass
                    }
                  >
                    <GoPrimitiveDot />
                  </NavLink>
                  Menu
                </NavLink>
                <ul className="menu bg-[#252525] text-sm normal-case w-72">
                  <li className="py-1 hover:bg-[#363636] hover:text-primary border-b border-[#3c3c3c]">
                    <Link to={"/menu"}>Menu</Link>
                  </li>
                  <li className="py-1 hover:bg-[#363636] hover:text-primary border-b border-[#3c3c3c]">
                    <a>Item 2</a>
                  </li>
                  <li className="py-1 hover:bg-[#363636] hover:text-primary border-b border-[#3c3c3c]">
                    <a>Item 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>RESERVATIONS</a>
              </li>
              <li>
                <a>CATERING</a>
              </li>
              <li>
                <a>GALLERY</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </motion.din>
    </div>
  );
};

export default Navbar;
