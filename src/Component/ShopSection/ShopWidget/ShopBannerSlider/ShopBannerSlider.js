"use client";
import Image from "next/image";
import shopBannerData from "./shopBannerData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
const ShopBannerSlider = () => {
  return (
    <Swiper
      pagination={{ clickable: true, el: ".shop-bnr-sldr-pagination" }}
      className="shop-bnr-sldr-swiper"
      modules={[Pagination]}
    >
      {shopBannerData &&
        Array.isArray(shopBannerData) &&
        [...shopBannerData].map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slider-item">
              <div className="image">
                <Image
                  quality={100}
                  src={item.image}
                  alt={item.title}
                  width={280}
                  height={340}
                  className="w-auto"
                />
              </div>
              <div className="content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <h3>
                  ${item.discountPrice} <span>${item.price}</span>
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      <div className="shop-bnr-sldr-pagination swiper-pagination justify-content-center pb-2"></div>
    </Swiper>
  );
};

export default ShopBannerSlider;
