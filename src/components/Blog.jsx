import React from "react";
import data from "../database/dataBlog";

const Blog = () => {
  return (
    <>
      <h1 className="pt-20 pl-3 text-left text-xl font-semibold md:text-center md:text-3xl">
        My{" "}
        <span className="bg-gradient-to-r  from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          Blog
        </span>
      </h1>
      <p className="pl-3 text-left text-gray-600 md:text-center">
        My note collection
      </p>
      <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {data.map((data) => {
          return (
            <>
              <div className=" flex h-40 w-full rounded bg-white/10  lg:h-48 lg:max-w-full">
                <div
                  className="h-40 w-32 flex-none overflow-hidden rounded-l bg-cover text-center lg:h-auto lg:w-48"
                  title={data.name}
                  data-aos="flip-up"
                >
                  <img src={data.image} alt={data.name} className="h-full" />
                </div>
                <div
                  className="flex flex-col justify-between rounded-r bg-[#051D2C] p-4 leading-3  lg:border-gray-400"
                  data-aos="flip-down"
                >
                  <div className="mb-8">
                    <div className="mb-2 text-[18px] font-semibold text-cyan-600 md:text-xl leading-4">
                      {data.name}
                    </div>
                    <p className="leading-2 mb-3 text-xs text-gray-500 lg:text-base flex-nowrap flex">
                      {data.desc.substring(0,90)}...
                    </p>
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-5 rounded bg-gradient-to-r from-cyan-500 to-blue-500 px-2 text-sm"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Blog;
