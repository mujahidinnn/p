import React from "react";
import { FaBootstrap, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoReact, IoLogoSass } from "react-icons/io5";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      logo: <IoLogoJavascript />,
      color: "-yellow-400",
    },
    {
      logo: <FaGitAlt />,
      color: "-orange-600",
    },
    {
      logo: <IoLogoReact />,
      color: "-cyan-600",
    },
    {
      logo: <SiNextdotjs />,
      color: "-white",
    },
    {
      logo: <IoLogoSass />,
      color: "-pink-600",
    },
    {
      logo: <FaBootstrap />,
      color: "-purple-600",
    },
    {
      logo: <SiTailwindcss />,
      color: "-blue-400",
    },
  ];
  return (
    <section
      id="skills"
      className="flex justify-evenly py-10"
      data-aos="zoom-in"
    >
      <div className="mt-8 text-center text-gray-100">
        <h3 className="text-2xl font-semibold md:text-4xl">
          My{" "}
          <span className="bg-gradient-to-r  from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h3>
        <p className="mt-3 text-lg text-gray-400">My knowledge</p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 p-4 md:gap-10">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className={`group relative min-w-[2rem] max-w-[6rem] transform rounded-xl border-2 bg-gray-900 p-9 transition duration-500 hover:scale-110 md:p-10 border${skill.color}`}
            >
              <div
                className={`flex h-1 w-1 items-center justify-center rounded-full bg-gray-900 text-9xl text${skill.color}`}
              >
                <p className="text-4xl md:text-5xl">{skill.logo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
