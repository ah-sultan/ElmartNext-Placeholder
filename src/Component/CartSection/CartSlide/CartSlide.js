import Link from "next/link";
import CartListItem from "./CartListItem";

const CartSlide = ({
  showCartSlide,
  setShowCartSlide
}) => {
  return (
    <div className={`cart-slide ${showCartSlide ? "visible" : ""}`}>
      <div className="cart-content">
        <div className="cart-header">
          <h2 className="cart-title">Cart View</h2>
          <button type="button" className="cart-close" onClick={() => setShowCartSlide(false)}>
            <i className="fa-regular fa-circle-xmark"></i>
          </button>
        </div>
        <div className="cart-body">
          <ul className="cart-item-list">
            {[
              {
                id: 0,
                image: "/image/home-one/feature-product/casual-man-dress.jpg",
                title: "Casual Man Dress Shirt",
                review: "56",
                rating: 5,
                price: 15.0,
              },
              {
                id: 1,
                image: "/image/home-one/feature-product/fashion-woman-top.jpg",
                title: "Fashion Woman Top",
                review: "56",
                rating: 5,
                price: 15.0,
              },
            ].map((data, index) => {
              return <CartListItem {...data} key={index} />;
            })}
          </ul>
        </div>
        <div className="cart-bottom">
          <h3 className="cart-subtotal">
            <span className="subtotal-title">Subtotal:</span>
            <span className="subtotal-amount">$90.00</span>
          </h3>
          <div className="btn-group">
            <Link href="/cart" className="button-b">
              View Cart
            </Link>
            <Link href="/checkout" className="button-a">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSlide;
