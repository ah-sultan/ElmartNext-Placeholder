"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import DealProductCard from "./DealProductCard";
import dealProductData from "./dealProductData.json";
import { Navigation } from "swiper/modules";
import SliderNavigationBtn from "@/Component/widgets/SliderNavigationBtn/SliderNavigationBtn";

const DealProduct = () => {
  const swiperConfig = {
    loop: true,
    spaceBetween: 24,
    navigation: {
      nextEl: ".deal-product-swiper-next",
      prevEl: ".deal-product-swiper-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <>
      <section className="deal-product-section">
        <div className="container">
          <div className="row pb-25">
            <div className="col-xl-12 ">
              <div className="section-title-wrapper">
                <div className="section-title">
                  <span>Deal Product</span>
                  <h2>Deal of The Day</h2>
                </div>
                <div className="section-nav">
                  <div className="swiper-nav">
                    <SliderNavigationBtn
                      nextEl="deal-product-swiper-next"
                      prevEl="deal-product-swiper-prev"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <Swiper
                {...swiperConfig}
                modules={[Navigation]}
                className="deal-product-carousel"
              >
                {dealProductData &&
                  Array.isArray(dealProductData) &&
                  [...dealProductData].map((data, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <DealProductCard {...data} />
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

export default DealProduct;
