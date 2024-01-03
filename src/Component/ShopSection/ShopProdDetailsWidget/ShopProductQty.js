import Link from "next/link";
import { useState } from "react";

const ShopProductQty = ({}) => {
  const [quantity, setQuantity] = useState(0);

  // Handle increase quantity
  const handleIncreaseQty = (e) => {
    e.preventDefault();
    if (quantity > -1) {
      setQuantity((e) => e + 1);
    }
  };
  // Handle decrease quantity
  const handleDecreaseQty = (e) => {
    e.preventDefault();
    if (quantity > 0) {
      setQuantity((e) => e - 1);
    }
  };

  return (
    <>
      <div className="prod-qty-btns">
        <form className="item-quantity" action="#">
          <span className="decrease qty-btn" onClick={handleDecreaseQty}>
            -
          </span>
          <input disabled type="number" value={quantity} />
          <span className="increase qty-btn" onClick={handleIncreaseQty}>
            +
          </span>
        </form>
        <Link href="/cart" className="add-to-cart button-b">
          Add To Cart
        </Link>
        <div className="wishlist">
          <Link href="#">
            <i className="fa-solid fa-rotate"></i>
          </Link>
          <Link href="/wishlist">
            <i className="fa-solid fa-heart"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShopProductQty;
