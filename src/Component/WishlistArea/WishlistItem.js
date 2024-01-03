"use client";
import Image from "next/image";
import { useState } from "react";

const WishlistItem = ({ image, title, size, price, total, index }) => {
  const [count, setCount] = useState(1);
  const isBg = index % 2 === 0;
  return (
    <tr className={`wish-item ${isBg ? "no-bg" : "with-bg"}`}>
      <td className="product">
        <div className="item-image">
          <Image
            quality={100}
            src={image}
            alt="Fashion Woman Top"
            width={56}
            height={56}
          />
        </div>
        <p>{title}</p>
      </td>
      <td className="size" data-title="Size">
        <p>{size}</p>
      </td>
      <td className="price" data-title="Price">
        <p>${price}</p>
      </td>
      <td className="quantity" data-title="Quantity">
        <form className="item-quantity" action="#">
          <span
            className="decrease qty-btn"
            onClick={() => setCount(count - 1)}
          >
            -
          </span>
          <input disabled type="number" value={count} />
          <span
            className="increase qty-btn"
            onClick={() => setCount(count + 1)}
          >
            +
          </span>
        </form>
      </td>
      <td className="total" data-title="Total">
        <p>${total}</p>
      </td>
      <td className="close-icon">
        <i className="fa-solid fa-x"></i>
      </td>
    </tr>
  );
};

export default WishlistItem;
