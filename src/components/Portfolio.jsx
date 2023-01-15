import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import data from "../database/dataPortfolio";

const Project = () => {
  return (
    <section id="portfolio" className="flex flex-col py-20 text-white">
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
      <div className=" grid place-items-center items-center gap-10 sm:grid-cols-1 md:grid-cols-2 md:p-10 lg:grid-cols-3 xl:grid-cols-4">
        {data?.map((project, i) => (
          <div
            key={i}
            className="relative w-full min-w-full max-w-full rounded-md bg-[#051D2C] p-1 pt-0 md:p-3 md:pt-0"
            data-aos="flip-right"
          >
            {/*  */}
            <div className="flex items-center py-2">
              <div className="flex gap-2 px-1">
                <span className="block h-3 w-3 rounded-full bg-[#ff605c]"></span>
                <span className="block h-3 w-3 rounded-full bg-[#ffbd44]"></span>
                <span className="block h-3 w-3 rounded-full bg-[#00ca4e]"></span>
              </div>
            </div>
            {/*  */}
            <div className="flex h-full w-full items-center justify-center rounded-md bg-[#051D2C] text-9xl">
              <img
                src={project.img}
                alt=""
                className="h-[200px] w-[600px] rounded"
              />
            </div>
            <p className="mt-4 text-xl">{project.name}</p>
            <p>{project.desc}</p>
            <div className="mt-3 flex gap-5">
              <a
                href={project.github}
                target="_blank"
                className={`${
                  project.github === ""
                    ? "h-5"
                    : "px-3 py-1 rounded border border-cyan-500"
                }`}
              >
                {project.github === "" ? "" : "Github"}
              </a>
              <a
                href={project.link}
                target="_blank"
                className={`${
                  project.link === ""
                    ? "h-5"
                    : "bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1 rounded"
                }`}
              >
                {project.link === "" ? "" : "Go Live"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
