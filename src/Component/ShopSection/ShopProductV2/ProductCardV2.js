"use client";

import { useState } from "react";
import { handlePopup } from "@/Component/ProductDetailsPopup/handlePopup";
import Link from "next/link";
import Image from "next/image";

const ProductCardV2 = ({
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
      <div className="shop-cat-card-v2">
        <div className="shop-background">
          <div className="shop-image-v2">
            {discountTag && (
              <div className="tag-discount-v2">&#8212;{discountTag}%</div>
            )}
            {newTag && <div className="tag-new-v2">New</div>}
            <Link className="shop-img-wrap-v2" href="/shop-details">
              <Image
                quality={100}
                className="ori-img-v2"
                id="sc-cng-img-8"
                src={image}
                title={title}
                alt={title}
                height="340"
                width="280"
              />
              <Image
                quality={100}
                className="ori-img-hover-v2"
                src={hoverImage}
                title={title}
                alt={title}
                height="340"
                width="280"
              />
            </Link>
          </div>
          <div className="shop-content-v2">
            <div className="shop-info-v2">
              <div className="product-variant">
                {colors &&
                  Array.isArray(colors) &&
                  [...colors].map((color, index) => {
                    return (
                      <div
                        key={index}
                        className="color-3 sc-cng-img8-btn3"
                        style={{ background: `${color}`, content: "" }}
                      ></div>
                    );
                  })}
              </div>
              <div className="prod-size-select">
                <div className="tag-cloud-v2">
                  {sizes &&
                    Array.isArray(sizes) &&
                    [...sizes].map((size, index) => {
                      return (
                        <div key={index} className="tag-item-v2">
                          <span>{size}</span>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="product-review">
                <div className="rating-star">
                  {Array(countRating)
                    .fill()
                    .map((_, index) => {
                      return <i key={index} className="fa-solid fa-star"></i>;
                    })}
                  <span>&nbsp;(22)</span>
                </div>
              </div>
            </div>
            <Link href="/shop-details">
              <h5>{title}</h5>
            </Link>
            <h3>${currentPrice}</h3>
            <div className="shop-sec-qty-left">Hurry Up! Only 80 Left!</div>
            <div className="shop-sec-progress-bar">
              <div className="shop-sec-progress"></div>
            </div>
            <div className="product-over">
              <ul>
                <li>
                  <Link href="#">
                    <i className="fa-solid fa-heart"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="product-img-popup"
                    href="#shop-details-top-area"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDetailsPopup();
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
              <div className="shop-button-v2">
                <Link href="#" className="button-b">
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCardV2;
