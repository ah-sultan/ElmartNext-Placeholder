"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonialCardData from "./testimonialCardData.json";
import TestimonialCard from "./TestimonialCard";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const Testimonial = () => {
  return (
    <>
      <section className="testimonial-section">
        <div className="testimonial-container">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-xxl-5 col-sm-12">
                <div className="section-title-wrapper pb-25">
                  <div className="section-title">
                    <span>Our Testimonial</span>
                    <h2>What our clients say</h2>
                  </div>
                </div>
                <div>
                  <Swiper
                    className="testimonial-slider"
                    modules={[Pagination]}
                    pagination={{
                      el: ".testimonial-pagination",
                      clickable: true,
                    }}
                  >
                    {testimonialCardData &&
                      Array.isArray(testimonialCardData) &&
                      [...testimonialCardData].map((data, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <TestimonialCard {...data} />
                          </SwiperSlide>
                        );
                      })}
                    <div className="testimonial-pagination swiper-pagination "></div>
                  </Swiper>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-xxl-7">
                <div className="brands-testimonial container">
                  <div className="col-xl-3 brand-img-container">
                    <Image
                      quality={100}
                      className="brand1 img-fluid"
                      src="/image/home-one/testimonial-section/1.png"
                      alt="Brand 1"
                      width={107}
                      height={107}
                    />
                    <Image
                      quality={100}
                      className="brand2 img-fluid"
                      src="/image/home-one/testimonial-section/2.png"
                      alt="Brand 2"
                      width={107}
                      height={107}
                    />
                  </div>
                  <div className="col-xl-3 brand-img-container justify-content-center">
                    <Image
                      className="brand3 img-fluid"
                      src="/image/home-one/testimonial-section/3.png"
                      alt="Brand 3"
                      width={107}
                      height={107}
                    />
                  </div>
                  <div className="col-xl-3 brand-img-container">
                    <Image
                      quality={100}
                      className="brand4 img-fluid"
                      src="/image/home-one/testimonial-section/4.png"
                      alt="Brand 4"
                      width={107}
                      height={107}
                    />
                    <Image
                      quality={100}
                      className="brand5 img-fluid"
                      src="/image/home-one/testimonial-section/5.png"
                      alt="Brand 5"
                      width={107}
                      height={107}
                    />
                  </div>
                  <div className="col-xl-3 brand-img-container justify-content-center">
                    <Image
                      quality={100}
                      className="brand6 img-fluid"
                      src="/image/home-one/testimonial-section/6.png"
                      alt="Brand 6"
                      width={107}
                      height={107}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
