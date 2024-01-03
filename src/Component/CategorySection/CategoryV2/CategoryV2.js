"use client";
import Link from "next/link";
import categoryV2Data from "./categoryV2Data.json";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import SliderNavigationBtn from "@/Component/widgets/SliderNavigationBtn/SliderNavigationBtn";

const CategoryV2 = () => {
  return (
    <>
      <section className="category-section-v2">
        <div className="container">
          <div className="row pb-25">
            <div className="col-sm-12">
              <div className="section-title">
                <span>Categories</span>
                <h2>Browse by Top Category</h2>
              </div>
              <div className="section-nav">
                <SliderNavigationBtn
                  nextEl="category-v2-next"
                  prevEl="category-v2-prev"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Swiper
                loop={true}
                modules={[Navigation]}
                navigation={{
                  nextEl: ".category-v2-next",
                  prevEl: ".category-v2-prev",
                }}
                breakpoints={{
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
                }}
                className="slide1 category-carousel-v2"
              >
                {categoryV2Data &&
                  Array.isArray(categoryV2Data) &&
                  [...categoryV2Data].map((data) => {
                    return (
                      <SwiperSlide key={data.id}>
                        <Link
                          href="/"
                          className="swiper-slide cat-card-v2 w-100"
                        >
                          <div className="category-content">
                            <div className="category-title">
                              <h5>{data.title}</h5>
                              <span>
                                {data.quantity}
                                {""}Available
                              </span>
                            </div>
                            <div className="category-image">
                              <Image
                               quality={100}
                                src={data.image}
                                alt={data.imageAlt}
                                width={150}
                                height={150}
                              />
                            </div>
                          </div>
                        </Link>
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

export default CategoryV2;
