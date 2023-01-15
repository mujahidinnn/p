import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/images/08c7e5d9-ad01-4194-a637-6e3c79a0e922.webp";
import DownloadCV from "../assets/Mujahidin.pdf";
import SliderProject from "./SliderProject";
import Skills from "./Skills";
//
import { SiDribbble, SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { RxDoubleArrowDown } from "react-icons/rx";

const Hero = () => {
  const social_media = [
    <SiInstagram />,
    <SiGithub />,
    <SiLinkedin />,
    <SiDribbble />,
  ];

  return (
    <>
      <section
        id="home"
        className="flex min-h-screen flex-col items-center py-10 md:flex-row"
      >
        <div
          className="flex h-full flex-1 flex-col items-center justify-center"
          data-aos="fade-left"
        >
          <img
            src={hero}
            alt="mujahidin"
            title="mujahidin"
            className="w-12/12 md:12/8 mt-[-50px] h-[350px] object-cover md:mt-[-100px]"
          />
          <div className="mt-2 flex items-center justify-center gap-5 pb-6 text-xl md:mt-8 md:justify-start md:text-3xl">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="cursor-pointer text-gray-600 hover:text-white "
              >
                <span title="">{icon}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1" data-aos="fade-right">
          <div className="text-center md:text-left">
            <h1 className="mt-[-34px] text-2xl font-bold leading-3 text-white md:mt-0 md:text-5xl md:leading-normal">
              <span className="bg-gradient-to-r  from-cyan-500 to-blue-500 bg-clip-text text-4xl font-extrabold  text-transparent md:text-6xl">
                Hi, there!
                <br />
              </span>
            </h1>

            <div className="my-3 text-gray-300">
              <p className="mx-auto w-11/12 text-justify text-sm leading-5 md:mx-0 md:text-lg md:leading-7">
                <p>
                  My name is{" "}
                  <span className="text-md font-bold">Mujahidin</span>, you can
                  call me whatever you like.
                </p>
                <p>
                  I'm a{" "}
                  <span className="text-md font-bold">
                    frontend web developer
                  </span>
                  &nbsp;and familiar with react JS.
                </p>
              </p>
            </div>

            <div className="mx-6  flex justify-center gap-7 md:mx-auto md:justify-start">
              <Link to="/contact">
                <div className="mt-8 flex items-center justify-center rounded-xl border border-transparent bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-5 text-sm text-white/90 md:py-3 md:px-3 md:text-base ">
                  Contact Me
                </div>
              </Link>
              <a
                href={DownloadCV}
                download
                className="mt-8 flex items-center rounded-xl border border-cyan-600 px-6 text-sm text-white/90  md:text-base"
              >
                <button>Download CV</button>
              </a>
            </div>
          </div>
          <div
            id="scrolls"
            className="absolute ml-[-5px] hidden animate-bounce cursor-pointer md:bottom-[-16rem] md:block"
          >
            <a href="#skills">
              <RxDoubleArrowDown size={18} />
            </a>
          </div>
        </div>
      </section>
      <div className="mx-auto hidden justify-center pb-28 lg:flex lg:flex-row">
        <Skills />
        <SliderProject />
      </div>

      <div className="flex flex-col lg:hidden">
        <Skills />
        <SliderProject className="w-[400px]" />
      </div>
    </>
  );
};

export default Hero;
