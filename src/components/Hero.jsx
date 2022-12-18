import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/images/08c7e5d9-ad01-4194-a637-6e3c79a0e922.webp";
import DownloadCV from "../assets/Mujahidin.pdf"
import SliderProject from "./SliderProject";
import Skills from "./Skills";
//
import { SiDribbble, SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

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
        <div className="flex h-full flex-1 flex-col items-center justify-center">
          <img
            src={hero}
            alt=""
            className="md:w-12/12 mt-[-50px] h-full object-cover md:mt-[-250px]"
          />
          <div className="mt-8 flex items-center justify-center gap-5 pb-6 text-3xl md:justify-start">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="cursor-pointer text-gray-600 hover:text-white "
              >
                <span>{icon}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold leading-10 text-white md:text-5xl md:leading-normal">
              <span className="bg-gradient-to-r  from-cyan-500 to-blue-500 bg-clip-text text-5xl font-extrabold  text-transparent md:text-6xl">
                Hi, there!
                <br />
              </span>
            </h1>

            <div className="my-3 text-gray-300">
              <p className="mx-auto w-11/12 text-justify text-sm leading-7 md:mx-0 md:text-lg">
                <p>
                  My name is{" "}
                  <span className="text-md font-bold">Mujahidin</span>, you can
                  call me whatever you like.
                </p>
                <p>
                  I 'am a{" "}
                  <span className="text-md font-bold">
                    frontend web developer
                  </span>
                  , and familiar with react JS.
                </p>
              </p>
            </div>

            <div className="mx-6  flex gap-7 md:mx-auto">
              <Link to="/contact">
                <button className="mt-8 flex items-center justify-center rounded-full border border-transparent bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-3 ">
                  Contact Me
                </button>
              </Link>
              <a
                href={DownloadCV}
                download
                className="mt-8 rounded-full border  border-blue-900  px-8 flex items-center"
              >
                <button>Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto hidden items-center justify-center pb-28 lg:flex lg:flex-row">
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
