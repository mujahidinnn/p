import React from "react";
import { BsArrowRight } from "react-icons/bs";
import DataBlog from "../../src/database/datablog.json";

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
      <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3">
        {DataBlog.map((data) => {
          return (
            <>
              <div className=" flex h-40 w-full lg:h-48 lg:max-w-full">
                <div
                  className="h-40 w-32 flex-none overflow-hidden rounded-l bg-cover text-center lg:h-auto lg:w-48"
                  title={data.name}
                  data-aos="flip-up"
                >
                  <img src={data.image} alt="" className="h-full" />
                </div>
                <div
                  className="flex flex-col justify-between rounded-r border-r border-b border-l border-gray-400 bg-white/95 p-4 leading-3 lg:border-l-0 lg:border-t lg:border-gray-400"
                  data-aos="flip-down"
                >
                  <div className="mb-8">
                    <div className="mb-2 text-[14px] font-semibold text-gray-900 md:text-xl">
                      {data.name}
                    </div>
                    <p className="text-xs leading-3 text-gray-500 lg:text-base">
                      {data.desc}
                    </p>
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <p className="mt-2 flex w-max items-center gap-1  px-1 text-[10px] leading-none text-gray-700 lg:text-sm">
                        Read more <BsArrowRight fontWeight={600} />
                      </p>
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
