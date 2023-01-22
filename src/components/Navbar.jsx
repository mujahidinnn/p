import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineFolder } from "react-icons/hi";
import { IoClose, IoReaderOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlinePhone } from "react-icons/md";
import hero from "../assets/images/08c7e5d9-ad01-4194-a637-6e3c79a0e922.webp";
import avatar from "../assets/images/profile .png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [change, setChange] = useState(false);

  const activeLink = ({ isActive }) =>
    isActive
      ? `text-blue-500 md:text-white font-semibold border-b-[3px] border-cyan-400 pb-4 rounded-b`
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
        sticky
          ? "bg-gradient-to-r from-[#011522]/70 to-[#011522]/90  text-[#011522]"
          : "text-white"
      }`}
    >
      <div
        className={`flex items-center justify-between ${
          sticky ? "bg-[#011522]/80 md:bg-white/0" : "bg-[#011522]"
        }`}
      >
        <div className="mx-7">
          <h4 className="text-2xl font-bold uppercase md:text-4xl">
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
          } hidden rounded-bl-[10px] py-1 pl-20 font-medium  text-[#011522] md:block`}
          style={{ clipPath: "polygon(100% 100%, 10% 100%, 0% 0%, 100% 0%)" }}
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
              <NavLink to="/portfolio" className={activeLink}>
                Portfolio
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
          className={`absolute top-0  h-screen w-full  
           font-medium text-[#011522] duration-300 md:hidden ${
             open ? "right-0" : "right-[-100%]"
           }`}
        >
          <div className="absolute left-[25%] top-0 h-screen w-[75%] bg-[#011522] px-7 py-2">
            <ul className="flex h-full flex-col justify-center gap-10 py-2 text-lg">
              <div className="mt-[-150px] flex justify-center">
                {change ? (
                  <img
                    src={avatar}
                    alt=""
                    className="w-32 rounded-full border border-white/10 brightness-50"
                    onClick={() => setChange(!change)}
                  />
                ) : (
                  <img
                    src={hero}
                    alt=""
                    className="w-32 rounded-full border border-white/10 brightness-50"
                    onClick={() => setChange(!change)}
                  />
                )}
              </div>
              <li
                onClick={() => setOpen(false)}
                className=" border-b border-white/10 px-6 text-white/75 hover:text-white/90"
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
                className="border-b border-white/10 px-6 text-white/75 hover:text-white/90"
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
                className=" border-b border-white/10 px-6 text-white/75 hover:text-white/90"
              >
                <NavLink to="/portfolio" className={activeLink}>
                  <span className="flex items-center gap-3">
                    <HiOutlineFolder />
                    Portfolio
                  </span>
                </NavLink>
              </li>
              <li
                onClick={() => setOpen(false)}
                className="border-b border-white/10 px-6 text-white/75 hover:text-white/90"
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
          <div
            className="absolute top-0 left-0  h-screen w-[25%] bg-[#011522]/30"
            onClick={() => setOpen(false)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
