import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import data from "../database/dataPortfolio";

const Project = () => {
  return (
    <section
      id="projects"
      className="md:w-12/12 flex w-11/12 flex-col py-20 text-white"
    >
      <div className="text-center">
        <h3 className="text-2xl font-semibold md:text-4xl">
          My{" "}
          <span className="bg-gradient-to-r  from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Portfolio
          </span>
        </h3>
        <p className="mt-3 text-sm text-gray-400 md:text-lg">My awesome apps</p>
        <br />
      </div>
      <div className="m-auto ml-5 flex w-full flex-wrap items-center gap-10 p-5 md:p-10">
        {data?.map((project, i) => (
          <div
            key={i}
            className="group relative min-w-[18rem] max-w-[30rem] rounded-xl border-2 border-cyan-600 bg-gray-900 p-5 md:p-10"
            data-aos="flip-right"
          >
            <div className="flex h-[100%] w-[100%] items-center justify-center rounded-full bg-gray-900 text-9xl group-hover:text-cyan-600">
              <img src={project.img} alt="" className="rounded-lg" />
            </div>
            <p className="mt-4 text-xl">{project.name}</p>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
