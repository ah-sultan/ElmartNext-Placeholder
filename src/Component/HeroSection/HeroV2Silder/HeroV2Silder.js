"use client";
import HeroV2Banner from "./HeroV2Banner";
import heroData from "./heroV2Data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const HeroV2Slider = () => {
  return (
    <>
      <section className="hero-section-v2 hero-sec-slider">
        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          navigation={{
            nextEl: ".hero-sec-slider-next",
            prevEl: ".hero-sec-slider-prev",
          }}
          pagination={{
            el: ".hero-sec-slider-pagination",
            clickable: true,
          }}
        >
          {heroData && Array.isArray(heroData) && [...heroData].map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <HeroV2Banner {...data} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="hero-sec-slider-next">
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="hero-sec-slider-prev">
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <div className="hero-dot-nav">
          <div className="hero-sec-slider-pagination swiper-pagination"></div>
        </div>
      </section>
    </>
  );
};

export default HeroV2Slider;
