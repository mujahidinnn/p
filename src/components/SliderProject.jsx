import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Projects from "../database/dataproject.json";

const SliderProject = () => {
  return (
    <section
      id="projects"
      className="mb-20 py-10 text-white"
      data-aos="zoom-out"
    >
      <div className="text-center">
        <h3 className="text-2xl font-semibold md:text-4xl">
          My{" "}
          <span className="bg-gradient-to-r  from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h3>
        <p className="mt-3 text-lg text-gray-400">My awesome works</p>
      </div>
      <br />
      <div className="relative mx-auto flex max-w-6xl items-center gap-6 px-5">
        <div className="w-full lg:w-4/5">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {Projects.map((project, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full rounded-xl bg-slate-800 p-4">
                  <img
                    src={project.img}
                    alt=""
                    className="h-[250px] w-full rounded-lg"
                  />
                  <h3 className="my-4 text-xl">{project.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Link to="/project" className="m-auto flex w-max">
        <button className="m-auto mt-8 flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-8 text-lg font-semibold">
          More <BsArrowRight fontWeight={600} />
        </button>
      </Link>
    </section>
  );
};

export default SliderProject;
