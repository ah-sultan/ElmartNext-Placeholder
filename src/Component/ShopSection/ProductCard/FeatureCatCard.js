"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, memo, useState } from "react";
import { handlePopup } from "../../ProductDetailsPopup/handlePopup";

const FeatureCatCard = ({
  title,
  image,
  hoverImage,
  colors,
  price,
  discountPrice,
  discountTag,
  newTag,
  rating,
  sizes = [],
  isList = false,
}) => {
  const [productSize, setProductSize] = useState(sizes && sizes[0]);

  // Product original date validation
  const countRating =
    rating && typeof rating?.rate === "number" && rating.rate > 0
      ? rating?.rate
      : 0;
  const currentPrice = discountPrice ? discountPrice : price;

  // Popup Details Section Handling
  const handleDetailsPopup = () => {
    handlePopup.showPopup({ title });
  };

  return (
    <>
      <div className="feature-cat-card">
        <div className="feature-category-image">
          {discountTag && (
            <div className="tag-discount">&#8212;{discountTag}%</div>
          )}
          {newTag && <div className="tag-new">New</div>}
          <Link
            className="feature-cat-img-wrap"
            href={{
              pathname: `/product-details/${title}`,
              query: { slug: title },
            }}
          >
            <Image
              id="fp-cng-img-4-4"
              className="ori-img"
              src={image}
              alt="Silver Silk Shirt + Tie Mans"
              title="Silver Silk Shirt + Tie Mans"
              height="340"
              width="280"
              quality={100}
            />
            <Image
              className="ori-img-hover"
              src={hoverImage}
              alt="Silver Silk Shirt + Tie Mans"
              title="Silver Silk Shirt + Tie Mans"
              height="340"
              width="280"
              quality={100}
            />
          </Link>
          <div className="feature-category-hover">
            <ul>
              <li>
                <Link href="/wishlist">
                  <i className="fa-solid fa-heart"></i>
                </Link>
              </li>
              <li>
                <Link
                  className="product-img-popup"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(), handleDetailsPopup(true);
                  }}
                >
                  <i className="fa-solid fa-arrows-up-down-left-right"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa-solid fa-rotate"></i>
                </Link>
              </li>
            </ul>
            <Link href="#" className="feature-category-button">
              Add to Cart
            </Link>
          </div>
        </div>
        <div className="feature-category-content">
          <div className="feature-category-info">
            <div className="product-variant">
              {colors &&
                Array.isArray(colors) &&
                [...colors].map((color, index) => {
                  return (
                    <div
                      key={index}
                      className="color-3 fp-cng-img4-btn3-4"
                      style={{ background: color, content: "" }}
                    ></div>
                  );
                })}
            </div>
            {isList && sizes && Array.isArray(sizes) && (
              <div className="prod-size-select">
                <div className="tag-cloud-v2"></div>
                {[...sizes].map((size, index) => {
                  <div
                    key={index}
                    onClick={() => setProductSize()}
                    className={`tag-item-v2 ${
                      size === productSize && "active"
                    }`}
                    index
                  >
                    <span>{size}</span>
                  </div>;
                })}
              </div>
            )}
            <div className="product-review">
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
                <span>&nbsp;{`(${rating.reviews})`}</span>
              </div>
            </div>
          </div>
          <Link
            href={{
              pathname: `/product-details/${title}`,
              query: { slug: title },
            }}
          >
            <h5>{title}</h5>
          </Link>
          <h3>
            ${currentPrice} {discountPrice && <span>${price}</span>}
          </h3>
        </div>
      </div>
    </>
  );
};

export default memo(FeatureCatCard);
