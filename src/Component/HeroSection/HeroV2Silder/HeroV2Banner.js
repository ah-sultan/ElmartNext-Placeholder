import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
const HeroV2Banner = ({
  subHeading,
  heading,
  description,
  btnUrl,
  heroImage,
  heroImageAlt,
  rating,
  heroReviewImages,
  reviews,
}) => {
  const countRating = typeof rating === "number" && rating > 0 ? rating : 0;

  return (
    <>
      <div className="hero-banner">
        <div className="container hero-wrap">
          <div className="row">
            <div className="col-12 hero-sec-top p-0">
              <div className="hero-content">
                <span>{subHeading}</span>
                <h2>{heading}</h2>
                <p>{`${description}`}</p>
              </div>
              <div className="hero-info">
                <div className="hero-button">
                  <Link href={btnUrl} className="button-b">
                    Shop Now
                  </Link>
                </div>
                <div className="hero-reviews">
                  <div className="review-container">
                    <div className="hero-review-images">
                      {heroReviewImages &&
                        Array.isArray(heroReviewImages) &&
                        [...heroReviewImages].map((data, index) => {
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
                        {Array(countRating)
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
                        {reviews} <span>Reviews</span>
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
                src={heroImage}
                alt={heroImageAlt}
                width={582}
                height={778}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroV2Banner;
