import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import "../slider.css";
import MemoryImg from "../img/memory.png";
import PCImg from "../img/pc2.png";
import BundleImg from "../img/bundle.png";

const sliderData = [
  {
    img: MemoryImg,
    pretitle: "Special offer",
    titlePart1: "Buy one get",
    titlePart2: "one FREE",
    titlePart3: "on Memory",
    btnText: "Shop now",
  },
  {
    img: PCImg,
    pretitle: "NEWLY RELEASED",
    titlePart1: "systems with the",
    titlePart2: "brand new",
    titlePart3: "RTX 4090",
    btnText: "Shop now",
  },
  {
    img: BundleImg,
    pretitle: "Bundle",
    titlePart1: "Check out",
    titlePart2: "our all in",
    titlePart3: "one bundles",
    btnText: "Shop now",
  },
];

const MainSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      loop={true}
      pagination={{
        clickable: true,
      }}
      className="mainSlider h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl"
    >
      <>
        {sliderData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]">
                <div className="w-full lg:flex-1">
                  <div className="uppercase mb-1 text-center lg:text-left">
                    {slide.pretitle}
                  </div>
                  <div className="text-3xl md:text-[46px] font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20">
                    {slide.titlePart1} <br />
                    {slide.titlePart2} <br />
                    {slide.titlePart3}
                  </div>
                  <button className="btn btn-accent mx-auto lg:mx-0">
                    Shop now
                  </button>
                </div>
                <div className="flex-1">
                  <img
                    className="xl:absolute xl:-right-1 xl:-bottom-12 z-[-1]"
                    src={slide.img}
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
};

export default MainSlider;
