import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineFolder } from "react-icons/hi";
import { IoClose, IoReaderOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlinePhone } from "react-icons/md";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const activeLink = ({ isActive }) =>
    isActive
      ? `text-white font-semibold border-b-[3px] border-cyan-400 pb-4 rounded-b`
      : ``;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav
      className={`fixed left-0 top-0 z-[999] w-full ${
        sticky ? "bg-gray-900/60  text-gray-900" : "text-white"
      }`}
    >
      <div
        className={`flex items-center justify-between ${
          sticky ? "bg-gray-900 md:bg-white/0" : "bg-gray-900 "
        }`}
      >
        <div className="mx-7">
          <h4 className="text-4xl font-bold uppercase">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent ">
              mujahidin
            </span>
          </h4>
        </div>
        <div
          className={` ${
            sticky
              ? "bg-gradient-to-r from-cyan-400/75 to-blue-400/75"
              : "bg-cyan md:bg-white/0"
          } hidden rounded-bl-[40px] px-7 py-1 font-medium text-gray-900  md:block `}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            <li className="px-6 text-gray-300 hover:text-white">
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li className="px-6 text-gray-300 hover:text-white">
              <NavLink to="/contact" className={activeLink}>
                Contact
              </NavLink>
            </li>
            <li className="px-6 text-gray-300 hover:text-white">
              <NavLink to="/project" className={activeLink}>
                Project
              </NavLink>
            </li>
            <li className="px-6 text-gray-300 hover:text-white">
              <NavLink to="/blog" className={activeLink}>
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-100" : "text-gray-100"
          } m-5 text-3xl md:hidden`}
        >
          {open ? <IoClose /> : <HiOutlineMenuAlt3 />}
        </div>

        <div
          className={`absolute top-0 h-screen w-3/4  bg-gray-900
      px-7 py-2 font-medium text-gray-900 duration-300 md:hidden ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex h-full flex-col justify-center gap-10 py-2 text-lg">
            <li
              onClick={() => setOpen(false)}
              className=" border-b px-6 text-white/75 hover:text-white"
            >
              <NavLink to="/" className={activeLink}>
                <span className="flex items-center gap-3">
                  <AiOutlineUser />
                  Home
                </span>
              </NavLink>
            </li>
            <li
              onClick={() => setOpen(false)}
              className="border-b px-6 text-white/75 hover:text-white"
            >
              <NavLink to="/contact" className={activeLink}>
                <span className="flex items-center gap-3">
                  <MdOutlinePhone />
                  Contact
                </span>
              </NavLink>
            </li>
            <li
              onClick={() => setOpen(false)}
              className=" border-b px-6 text-white/75 hover:text-white"
            >
              <NavLink to="/project" className={activeLink}>
                <span className="flex items-center gap-3">
                  <HiOutlineFolder />
                  Project
                </span>
              </NavLink>
            </li>
            <li
              onClick={() => setOpen(false)}
              className="border-b px-6 text-white/75 hover:text-white"
            >
              <NavLink to="/blog" className={activeLink}>
                <span className="flex items-center gap-3">
                  <IoReaderOutline />
                  Blog
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
