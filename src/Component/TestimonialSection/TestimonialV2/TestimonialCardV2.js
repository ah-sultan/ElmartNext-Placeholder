import Image from "next/image";
import { Fragment } from "react";

const TestimonialCardV2 = ({ quote, rating, author }) => {
  const countRating = typeof rating === "number" && rating > 0 ? rating : 0;

  return (
    <>
      <div className="">
        <div className="testimonial-content-top">
          <div className="quotation-icon">
            <Image
              quality={100}
              src="/image/home-two/testimonial/quotation-icon.png"
              alt="quote icon"
              width={36}
              height={23}
            />
          </div>
          <div className="tes-sec-rating-star">
            {Array(countRating)
              .fill()
              .map((_, index) => {
                return (
                  <Fragment key={index}>
                    <i className="fa-solid fa-star"> </i>{" "}
                  </Fragment>
                );
              })}
          </div>
        </div>
        <div className="testimonial-content-bottom">
          <blockquote>{quote}</blockquote>
        </div>
        <div className="testimonial-author-v2">
          <Image
            quality={100}
            width={53}
            height={53}
            src={author.image}
            alt={author.name}
            className="img-fluid"
          />
          <div className="author-identity">
            <h2>{author.name}</h2>
            <h6>{author.title}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCardV2;
