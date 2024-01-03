"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import featureProductData from "./featureProductData.json";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import ProductCard from "../../ShopSection/ProductCard/ProductCard";
import SliderNavigationBtn from "@/Component/widgets/SliderNavigationBtn/SliderNavigationBtn";

const FeaturesProduct = ({ cardType }) => {
  const swiperConfig = {
    loop: true,
    navigation: {
      nextEl: ".feature-product-slider-next",
      prevEl: ".feature-product-slider-prev",
    },
    breakpoints: {
      250: {
        slidesPerView: 1,
        spaceBetween: 6,
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 14,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 18,
      },
      1580: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };
  return (
    <>
      <section className="features-product-section">
        <div className="features-product pt-80 pb-80 pl-120 pr-120">
          <div className="row pb-25">
            <div className="col-xl-12 section-title-wrapper">
              <div className="section-title">
                <span>Features Product</span>
                <h2>Our Features Collection</h2>
              </div>
              <div className="section-nav">
                <SliderNavigationBtn
                  nextEl=".feature-product-slider-next"
                  prevEl=".feature-product-slider-prev"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <Swiper
                modules={[Navigation]}
                {...swiperConfig}
                className="features-product-carousel"
              >
                {featureProductData &&
                  Array.isArray(featureProductData) &&
                  [...featureProductData].map((data, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <ProductCard {...data} cardType={cardType} />
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

export default FeaturesProduct;
