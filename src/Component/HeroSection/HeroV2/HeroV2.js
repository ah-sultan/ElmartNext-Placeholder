import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const HeroV2 = () => {
  const clientsImage = [
    {
      image: "/image/home-two/hero-section/hero-client-1.png",
    },
    {
      image: "/image/home-two/hero-section/hero-client-2.png",
    },
    {
      image: "/image/home-two/hero-section/hero-client-3.png",
    },
    {
      image: "/image/home-two/hero-section/hero-client-4.png",
    },
    {
      image: "/image/home-two/hero-section/hero-client-5.png",
    },
    {
      image: "/image/home-two/hero-section/hero-client-6.png",
    },
  ];
  return (
    <>
      <section className="hero-section-v2">
        <div className="container hero-wrap">
          <div className="row">
            <div className="col-12 hero-sec-top p-0">
              <div className="hero-content">
                <span>In This Season, Find The Best</span>
                <h2>Exclusive Collection for Everyone</h2>
                <p>
                  {` Here's a voice that keeps on calling me. down the road, that's
                  where i'll always be.`}
                </p>
              </div>
              <div className="hero-info">
                <div className="hero-button">
                  <Link href="/shop" className="button-b">
                    Shop Now
                  </Link>
                </div>
                <div className="hero-reviews">
                  <div className="review-container">
                    <div className="hero-review-images">
                      {clientsImage &&
                        Array.isArray(clientsImage) &&
                        [...clientsImage].map((data, index) => {
                          return (
                            <Image
                            quality={100}
                              key={index}
                              src={data.image}
                              width={50}
                              height={50}
                              alt={data.alt}
                              className={`image${index + 1} img-fluid`}
                            />
                          );
                        })}
                    </div>
                    <div className="hero-revw-cont text-end">
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
                      <span>
                        150+ <span>Reviews</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 hero-image-wrap">
              <Image
              quality={100}
                src="/image/home-two/hero-section/hero-img-1.png"
                alt="Hero Image"
                className="img-fluid"
                width={582}
                height={778}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroV2;
