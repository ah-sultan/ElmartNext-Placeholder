import Image from "next/image";

const TestimonialCard = ({
  clientName,
  designation,
  review,
  rating,
  image,
}) => {
  const countRating = typeof rating === "number" && rating > 0 ? rating : 0;

  return (
    <>
      <div className="testimonial-box">
        <div className="testimonial-content-top">
          <div className="quotation-icon">
            <i className="fa-solid fa-quote-left"></i>
          </div>
          <div className="rating-star">
            {Array(countRating)
              .fill()
              .map((_, index) => {
                return (
                  <i key={index} className="fa-solid fa-star">
                    &nbsp;
                  </i>
                );
              })}
          </div>
        </div>
        <div className="testimonial-content-bottom">
          <blockquote>{review}</blockquote>
        </div>
        <div className="testimonial-author">
          <Image
            quality={100}
            src={image}
            alt={clientName}
            width={78}
            height={79}
            className="img-fluid"
          />
          <div className="author-identity">
            <h2>{clientName}</h2>
            <h6>{designation}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
