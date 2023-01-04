import React from "react";
import data from "../database/dataTechTool";

const Skills = () => {
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
            Tech & Tool
          </span>
        </h3>
        <p className="mt-3 text-lg text-gray-400">My knowledge</p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 p-4 md:gap-10">
          {data?.map((skill, i) => (
            <div
              key={i}
              className={`group relative min-w-[2rem] max-w-[6rem] transform rounded-xl border-2 bg-gray-900 p-9 transition duration-500 hover:scale-110 md:p-10 ${skill.border}`}
            >
              <div
                className={`flex h-1 w-1 flex-col items-center justify-center rounded-full bg-gray-900 text-9xl ${skill.color}`}
              >
                <p className="text-4xl md:text-5xl">{skill.logo}</p>
                <p className="text-xs mt-1">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
