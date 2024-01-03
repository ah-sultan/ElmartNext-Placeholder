import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CartListItem = ({ image, title, review, rating, price }) => {
  const [count, setCount] = useState(5);
  const countRating = typeof rating === "number" && rating > 0 ? rating : 0;

  return (
    <>
      <li className="cart-item">
        <div className="item-img">
          <Link href="/shop-details">
            <Image
             quality={100}
              src={image}
              alt={title}
              className="img-fluid"
              width={108}
              height={126}
            />
          </Link>
          <button type="button" className="close-btn"> 
            <i className="fa-regular fa-circle-xmark"></i>
          </button>
        </div>
        <div className="item-content">
          <div className="product-rating">
            <span className="icon">
              {Array(countRating)
                .fill()
                .map((_, index) => {
                  return (
                    <i key={index} className="fa-solid fa-star">
                      {" "}
                    </i>
                  );
                })}
            </span>
            <span className="total-rating">{`(${review})`}</span>
          </div>
          <h3 className="item-title">
            <Link href="/shop-details">{title}</Link>
          </h3>
          <div className="item-price">${price}</div>
          <div className="item-quantity">
            <span className="decrease qty-btn" onClick={() => setCount(count - 1)}>
              -
            </span>
            <input disabled type="number" value={count} />
            <span className="increase qty-btn" onClick={() => setCount(count + 1)}>
              +
            </span>
          </div>
        </div>
      </li>
    </>
  );
};

export default CartListItem;
