"use client";
import Image from "next/image";
import Link from "next/link";
import { Fragment, memo, useState } from "react";
import { handlePopup } from "../../ProductDetailsPopup/handlePopup";

const ShopCatCard = ({
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
      <div className="shop-cat-card">
        <div className="shop-image">
          {discountTag && (
            <div className="tag-discount">&#8212;{discountTag}%</div>
          )}
          {newTag && <div className="tag-new">New</div>}
          <Link
            className="shop-img-wrap"
            href={{
              pathname: `/product-details/${title}`,
              query: { slug: title },
            }}
          >
            <Image
              className="ori-img img-fluid"
              id="sc-cng-img-1"
              src={image}
              alt={title}
              title={title}
              height="340"
              width="280"
              quality={100}
            />
            <Image
              className="ori-img-hover img-fluid"
              src={hoverImage}
              alt={title}
              title={title}
              height="340"
              width="280"
              quality={100}
            />
          </Link>
          <div className="shop-hover">
            <ul>
              <li>
                <Link href="#">
                  <i className="fa-solid fa-heart"></i>
                </Link>
              </li>
              <li>
                <Link
                  className="product-img-popup"
                  href="/"
                  onClick={(e) => {
                    e.preventDefault(), handleDetailsPopup();
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
            <Link href="#" className="shop-button">
              Add to Cart
            </Link>
          </div>
        </div>
        <div className="shop-content">
          <div className="shop-info">
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
                <div className="tag-cloud-v2">
                  <div className="tag-item-v2 active">
                    <span>M</span>
                  </div>
                  <div className="tag-item-v2">
                    <span>L</span>
                  </div>
                  <div className="tag-item-v2">
                    <span>XL</span>
                  </div>
                </div>
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
                <span>{` (${rating.reviews})`}</span>
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

export default memo(ShopCatCard);
