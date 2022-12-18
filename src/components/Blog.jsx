import React from "react";
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
      <p className="text-left text-gray-600 md:text-center pl-3">
        My note collection
      </p>
      <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3">
        {DataBlog.map((data) => {
          return (
            <>
              <div className=" h-40 lg:h-48 flex w-full lg:max-w-full">
                <div
                  className="h-40 w-32 flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
                  title={data.name}
                >
                  <img src={data.image} alt="" className="h-full" />
                </div>
                <div className="flex flex-col justify-between rounded-b border-r border-b border-l border-gray-400 bg-white/95 p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400">
                  <div className="mb-8">
                    <div className="mb-2 text-[14px] font-semibold text-gray-900 md:text-xl">
                      {data.name}
                    </div>
                    <p className="text-xs text-gray-700 lg:text-base ">
                      {data.desc}
                    </p>
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <p className="mt-2 w-max rounded border px-1 text-[10px] leading-none text-gray-400 hover:border-cyan-400 hover:text-cyan-400 lg:text-sm">
                        Read more &rarr;
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
