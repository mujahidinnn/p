import React from "react";
import Project from "./SliderProject";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoReact, IoLogoSass } from "react-icons/io5";
import { FaBootstrap, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      logo: <IoLogoJavascript />,
      border: "border-yellow-400",
      color: "text-yellow-400",
    },
    {
      logo: <FaGitAlt />,
      border: "border-orange-600",
      color: "text-orange-600",
    },
    {
      logo: <IoLogoReact />,
      border: "border-cyan-600",
      color: "text-cyan-600",
    },
    {
      logo: <SiNextdotjs />,
      border: "border-white",
      color: "text-white",
    },
    {
      logo: <IoLogoSass />,
      border: "border-pink-600",
      color: "text-pink-600",
    },
    {
      logo: <FaBootstrap />,
      border: "border-purple-600",
      color: "text-purple-600",
    },
    {
      logo: <SiTailwindcss />,
      border: "border-blue-400",
      color: "text-blue-400",
    },
  ];
  return (
    <section
      id="skills"
      className="flex justify-evenly py-10"
      data-aos="fade-down-left"
    >
      <div className="mt-8 text-center text-gray-100">
        <h3 className="text-2xl font-semibold md:text-4xl">
          My{" "}
          <span className="bg-gradient-to-r  from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h3>
        <p className="mt-3 text-lg text-gray-400">My knowledge</p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-10 p-4">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className={`group relative min-w-[3rem] max-w-[6rem] transform rounded-xl border-2 bg-gray-900 p-10 transition duration-500 hover:scale-110 ${skill.border}`}
            >
              <div
                className={`flex h-1 w-1 items-center justify-center rounded-full bg-gray-900 text-9xl ${skill.color}`}
              >
                <p className="text-5xl">{skill.logo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
