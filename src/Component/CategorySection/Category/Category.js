"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCard from "./CategoryCard";
import categoryData from "./categoryData.json";
import { Navigation } from "swiper/modules";
import SliderNavigationBtn from "@/Component/widgets/SliderNavigationBtn/SliderNavigationBtn";


const Category = () => {
  const swiperConfig = {
    loop: true,
    spaceBetween: 24,
    navigation: {
      nextEl: ".category-slide-next",
      prevEl: ".category-slide-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 5,
      },
    },
  };
  return (
    <>
      <section className="category-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-12 p-0">
              <div className="section-title-wrapper pb-25">
                <div className="section-title">
                  <span>Categories</span>
                  <h2>Browse by Top Category</h2>
                </div>
                <div className="section-nav">
                  <SliderNavigationBtn
                    nextEl="category-slide-next"
                    prevEl="category-slide-prev"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-10 col-lg-12 p-1">
              <Swiper
                {...swiperConfig}
                modules={[Navigation]}
                className="category-carousel"
              >
                {categoryData &&
                  Array.isArray(categoryData) &&
                  [...categoryData].map((data, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <CategoryCard {...data} />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
