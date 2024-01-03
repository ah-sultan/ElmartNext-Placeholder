"use client"
import { Fragment, useState } from "react";

const CommentForm = ({ className = "", isRating }) => {
  const [rated, setRated] = useState(0);
  return (
    <>
      <div className={`comment-form ${className}`}>
        <h2>Write Your Comment</h2>
        {isRating && (
          <div className="review-form-rating">
            <div className="rating-star">
              {Array(5)
                .fill()
                .map((_, index) => {
                  return (
                    <Fragment key={index}>
                      <i
                        onClick={() => setRated(index + 1)}
                        className={`rev-str-rtg fa-solid fa-star`}
                        style={{
                          color: `${
                            index + 1 <= rated ? "rgb(252, 192, 19)" : "rgb(193, 193, 193)"
                          }`,
                        }}
                      ></i>{" "}
                    </Fragment>
                  );
                })}
              <span className="rev-nm-cng">&nbsp;(0.0)</span>
            </div>
          </div>
        )}
        <form action="#">
          <div className="comment-input-area">
            <input
              type="text"
              name="comment-form"
              id="full-name"
              placeholder="Name*"
              required
            />
            <input
              type="email"
              name="comment-form"
              id="com-email"
              placeholder="Email*"
              required
            />
          </div>
          <textarea
            name="comment-form"
            id="comment-box"
            rows="6"
            placeholder="Your Message"
          ></textarea>
          <input
            className="com-btn button-b"
            type="submit"
            formAction="#"
            defaultValue="Submit Comment"
          />
        </form>
      </div>
    </>
  );
};

export default CommentForm;
