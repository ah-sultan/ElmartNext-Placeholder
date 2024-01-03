import Link from "next/link";

const OrderSummary = () => {
  return (
    <>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="order-summary-wrapper">
          <div className="title-area">
            <h4>Product</h4>
            <h4>Total</h4>
          </div>
          <div className="product-in-cart">
            <div className="product-item-wrap">
              <div className="item">
                <div className="product-name">Fashion Woman Top</div>
                <div className="product-amount-price">
                  <span>X + 1</span>
                  <span>$120</span>
                </div>
              </div>
              <div className="item">
                <div className="product-name">Double Breasted Suit</div>
                <div className="product-amount-price">
                  <span>XL + 2</span>
                  <span>$280</span>
                </div>
              </div>
              <div className="item">
                <div className="product-name">Women Leather Handbag</div>
                <div className="product-amount-price">
                  <span>XL + 1</span>
                  <span>$160</span>
                </div>
              </div>
              <div className="item">
                <div className="product-name">Men T-shirt Block Tee</div>
                <div className="product-amount-price">
                  <span>M + 1</span>
                  <span>$110</span>
                </div>
              </div>
            </div>
            <div className="shipping-charge">
              <div className="title-area">
                <h4>Subtotal</h4>
                <h4>$670.00</h4>
              </div>
              <div className="item">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <div className="item">
                <span>Free Shipping</span>
                <span>$10.00</span>
              </div>
              <div className="item">
                <span>Local Delivery</span>
                <span>$20.00</span>
              </div>
            </div>
            <div className="sub-total-amount">
              <h4>Total</h4>
              <p className="the-amount">$670.00</p>
            </div>
            <div className="payment-method">
              <form action="#">
                <div className="pay-meth">
                  <input
                    type="radio"
                    name="pay-meth"
                    id="direct-transfer"
                    checked
                  />
                  <label for="direct-transfer">Direct Bank Transfer</label>
                </div>
                <p>
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference.
                </p>
                <div className="pay-meth">
                  <input type="radio" name="pay-meth" id="cashon-delivery" />
                  <label for="cashon-delivery">Cash on Delivery</label>
                </div>
                <div className="pay-meth">
                  <input type="radio" name="pay-meth" id="card-pay" />
                  <label for="card-pay">Credit/Debit Cards or Paypal</label>
                </div>
              </form>
            </div>
            <Link href="#" className="payment-button button-b">
              Place Order Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
