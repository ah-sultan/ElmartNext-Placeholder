"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import relatedProductData from "./relatedProductData";
import { Navigation } from "swiper/modules";
import ProductCard from "../ProductCard/ProductCard";
import SliderNavigationBtn from "@/Component/widgets/SliderNavigationBtn/SliderNavigationBtn";

const RelatedProduct = () => {
  const swiperConfig = {
    loop: true,
    navigation: {
      nextEl: ".related-prod-slide-next",
      prevEl: ".related-prod-slide-prev",
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
      <section className="related-product-section">
        <div className="container">
          <div className="row pb-25">
            <div className="col-xl-12 section-title-wrapper">
              <div className="section-title">
                <span>Related Products</span>
                <h2>Customers also purchased</h2>
              </div>
              <div className="section-nav">
                <SliderNavigationBtn
                  nextEl="related-prod-slide-next"
                  prevEl="related-prod-slide-prev"
                />
              </div>
            </div>
          </div>
          <div className="row relate-prod-slide">
            <div className="col-12">
              <Swiper {...swiperConfig} modules={[Navigation]}>
                {relatedProductData &&
                  Array.isArray(relatedProductData) &&
                  [...relatedProductData].map((data, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <ProductCard cardType="shop" {...data} />
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

export default RelatedProduct;
