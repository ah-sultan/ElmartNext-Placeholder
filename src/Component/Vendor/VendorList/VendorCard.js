"use client";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const VendorCard = ({
  products,
  name,
  description,
  category,
  email,
  location,
  logo,
}) => {
  return (
    <>
      <div className="vendor-wrap">
        <div className="vendor-content">
          <div className="prod-count">
            <p>{products} Products</p>
          </div>
          <Swiper
            className="swiper vendor-list-slider"
            modules={[Pagination, Navigation]}
            pagination={{
              el: ".vendor-list-slider-pagination",
              clickable: "true",
            }}
            navigation={{
              nextEl: ".vendor-list-slider-next",
              prevEl: ".vendor-list-slider-prev",
            }}
          >
            <SwiperSlide>
              <h2>{name}</h2>
              <p className="vendor-store-desc">{description}</p>
              <div className="vendor-list-slider-next">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cont-info">
                <p>
                  <strong>Category:</strong> {category}
                </p>
                <p>
                  <strong>Email:</strong> {email}
                </p>
                <p>
                  <strong>Location:</strong> {location}
                </p>
              </div>
              <div className="vendor-list-slider-prev">
                <i className="fa-solid fa-arrow-left"></i>
              </div>
            </SwiperSlide>
            <div className="vendor-list-slider-pagination swiper-pagination"></div>
          </Swiper>
        </div>
        <div className="vendor-info">
          <div className="store-title">
            <div className="image">
              <Image
                quality={100}
                width={70}
                height={70}
                src={logo}
                alt={name}
                className="img-fluid"
              />
            </div>
            <h3>{name}</h3>
          </div>
          <div className="view-store flex-shrink-0">
            <Link href="/vendor-shop-left-Sidebar" className="button-b">
              View Store
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorCard;
