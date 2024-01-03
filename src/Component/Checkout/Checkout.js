import BellingDetails from "./BellingDetails";
import CheckoutCoupon from "./CheckoutCoupon";
import OrderSummary from "./OrderSummary";

const Checkout = () => {
  return (
    <>
      <section className="checkout-section">
        <div className="container">
          <CheckoutCoupon />
          <div className="row">
            <div className="col-lg-6">
              <BellingDetails />
            </div>
            <div className="col-lg-6 checkout-main-area">
              <OrderSummary />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
