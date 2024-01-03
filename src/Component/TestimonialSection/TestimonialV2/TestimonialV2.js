"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCardV2 from "./TestimonialCardV2";
import { Pagination } from "swiper/modules";
import testimonialV2CardData from "./testimonialV2CardData.json";

const TestimonialV2 = () => {
  const swiperConfig = {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
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
        spaceBetween: 24,
      },
    },
  };

  return (
    <>
      <section className="testimonial-section-v2">
        <div className="testimonial-container-v2">
          <div className="container p-0">
            <div className="section-title">
              <span>Our Testimonial</span>
              <h2>What our clients say</h2>
            </div>
            <Swiper
              modules={[Pagination]}
              {...swiperConfig}
              className="testimonial-slider-v2"
            >
              {testimonialV2CardData &&
                Array.isArray(testimonialV2CardData) &&
                [...testimonialV2CardData].map((data, index) => {
                  return (
                    <SwiperSlide className="testimonial-box" key={index}>
                      <TestimonialCardV2 {...data} />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
            <div className="swiper-pagination text-center"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialV2;
