import Image from "next/image";
import Link from "next/link";

const CommentCard = ({ author, quote, date, rating, reply, isLast }) => {
  // validation Count rating
  const countRating =
    typeof rating === "number" && rating > 0 && rating < 6 ? rating : 0;

  return (
    <>
      <div className={`review-wrap ${isLast ? "last" : " "}`}>
        <div className="info-area">
          <div className="author-info">
            <div className="author-img">
              <Image
                quality={100}
                width={60}
                height={60}
                src={author.image}
                alt={author.name}
                className="img-fluid"
              />
            </div>
            <div className="name-rating">
              <div className="author-id">
                <h3>{author.name}</h3>
                <h6>{date}</h6>
              </div>
              <div className="reviewer-rating">
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
                  <span>&nbsp;(5.0)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="reply-btn">
            <Link href="#" className="rply-btn button-b">
              Reply
            </Link>
          </div>
        </div>
        <div className="content">
          <p>{quote}</p>
        </div>
        {reply && <div className="shop-details-divider"></div>}
        {/* Review Reply Section */}
        {reply && (
          <div className="review-reply">
            <div className="author-id-2nd">
              <div className="author-img">
                <Image
                  quality={100}
                  src={reply.author.image}
                  alt={reply.author.name}
                  width={60}
                  height={60}
                />
              </div>
              <div className="author-name">
                <h3>{reply.author.name}</h3>
                <h6>{reply.date}</h6>
              </div>
            </div>
            <p>{reply.quote}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CommentCard;
