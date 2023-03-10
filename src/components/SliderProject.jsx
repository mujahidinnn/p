import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../database/dataPortfolio";

const SliderProject = () => {
  return (
    <section
      id="projects"
      className="mb-20 py-10 text-white"
      data-aos="zoom-in"
    >
      <div className="mt-8 text-center">
        <h3 className="text-2xl  font-semibold md:text-4xl">
          My{" "}
          <span className="bg-gradient-to-r  from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Portfolio
          </span>
        </h3>
        <p className="mt-3 text-lg text-gray-400">My awesome apps</p>
      </div>
      <br />
      <div className="relative mx-auto mt-9 flex min-w-[350px] max-w-4xl items-center gap-6 px-5">
        <div className="w-full">
          <Swiper
            // slidePerview={1}
            spaceBetween={20}
            breakpoints={{
              600: {
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
            {data.map((project, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full rounded-md bg-[#051D2C] p-4">
                  <img
                    src={project.img}
                    alt=""
                    className="h-[200px] w-[600px] rounded"
                  />
                  <h3 className="mb-3 text-lg text-white/80">{project.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Link to="/portfolio" className="m-auto flex w-max">
        <a href="#portfolio">
          <button className="m-auto mt-8 flex items-center gap-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-8 text-lg font-semibold text-white/90">
            More <BsArrowRight fontWeight={600} />
          </button>
        </a>
      </Link>
    </section>
  );
};

export default SliderProject;
