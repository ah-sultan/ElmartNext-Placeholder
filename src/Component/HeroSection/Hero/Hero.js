"use client";
import { Fragment } from "react";
import CountUp from "react-countup";

const { default: Image } = require("next/image");
const { default: Link } = require("next/link");

const Hero = () => {
  const clientsImage = [
    {
      id: 0,
      image: "/image/home-one/hero-section/hero-client-1.png",
    },
    {
      id: 1,
      image: "/image/home-one/hero-section/hero-client-2.png",
    },
    {
      id: 2,
      image: "/image/home-one/hero-section/hero-client-3.png",
    },
    {
      id: 3,
      image: "/image/home-one/hero-section/hero-client-4.png",
    },
    {
      id: 4,
      image: "/image/home-one/hero-section/hero-client-5.png",
    },
    {
      id: 5,
      image: "/image/home-one/hero-section/hero-client-6.png",
    },
  ];
  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 p-0">
                <div className="hero-content-top">
                  <h2 className="mb-35">
                    best fashion summer Collection for man & woman
                  </h2>
                  <Link href="/shop" className="button-b">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-md-3 hero-content-left p-0">
                <div className="hero-clients">
                  <div className="hero-clients-images">
                    {clientsImage &&
                      Array.isArray(clientsImage) &&
                      [...clientsImage].map((data, index) => {
                        return (
                          <Image
                            quality={100}
                            key={index}
                            src={data.image}
                            alt="clients"
                            width={79}
                            height={78}
                            className={`img-fluid image${index + 1}`}
                          />
                        );
                      })}
                  </div>
                  <div className="hero-rating mx-auto">
                    <div className="row">
                      <div className="col-6">
                        <div className="rating-star">
                          {Array(5)
                            .fill()
                            .map((_, index) => {
                              return (
                                <Fragment key={index}>
                                  <i className="fa-solid fa-star"></i>{" "}
                                </Fragment>
                              );
                            })}
                        </div>
                        <span>5 Star Reviews</span>
                      </div>
                      <div className="col-6">
                        <div className="hero-rating-counter">
                          <h3>
                            <CountUp
                              end={40000}
                              separator=""
                              className="hero-count"
                            />
                            +
                          </h3>
                          <p>Trusted Clients</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-flex justify-content-center">
                <div className="hero-image">
                  <Image
                    quality={100}
                    src="/image/home-one/hero-section/hero-image-1.png"
                    alt="Hero Image"
                    width={594}
                    height={606}
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 d-flex align-items-center justify-content-end p-0">
                <div className="hero-content-right">
                  <div className="man">
                    <Link href="#">Man</Link>
                    <div className="hero-content-right-image">
                      <Image
                        src="/image/home-one/hero-section/man.jpg"
                        alt="Man"
                        width={"212"}
                        height={"183"}
                        quality={100}
                      />
                    </div>
                  </div>
                  <div className="woman">
                    <Link href="#">Woman</Link>
                    <div className="hero-content-right-image">
                      <Image
                        quality={100}
                        src="/image/home-one/hero-section/woman.jpg"
                        alt="Women"
                        width={228}
                        height={187}
                      />
                    </div>
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

export default Hero;
