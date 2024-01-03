"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import featureProductData from "./featureProductData";
import ProductCard from "../../ShopSection/ProductCard/ProductCard";
import SliderNavigationBtn from "@/Component/widgets/SliderNavigationBtn/SliderNavigationBtn";

const FeaturesProductV2 = ({cardType}) => {
  const swiperConfig = {
    loop: true,
    navigation: {
      nextEl: ".feature-product-v2-next",
      prevEl: ".feature-product-v2-prev",
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
      <section className="features-product-section-v2">
        <div className="features-product">
          <div className="container">
            <div className="row pb-25">
              <div className="col-xl-12">
                <div className="section-title">
                  <span>Features Product</span>
                  <h2>Our Features Collection</h2>
                </div>
                <div className="section-nav">
                  <SliderNavigationBtn
                    nextEl="feature-product-v2-next"
                    prevEl="feature-product-v2-prev"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <Swiper
                  modules={[Navigation]}
                  {...swiperConfig}
                  className="swiper slide2 features-product-carousel"
                >
                  {featureProductData && Array.isArray(featureProductData) && [...featureProductData].map((data, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <ProductCard
                          {...data}
                          cardType={cardType}
                          
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default FeaturesProductV2;
