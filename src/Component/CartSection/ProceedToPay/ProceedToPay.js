import Link from "next/link";
import ShippingCountry from "./ShippingCountry";



const ProceedToPay = () => {
  return (
    <>
      <section className="proceed-to-pay">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-6 col-12">
              <form className="coupon-code" action="#">
                <input
                  type="text"
                  name="coupon-code"
                  id="coupon-code"
                  placeholder="Discount Code"
                />
                <Link href="#" className="coupon-btn button-b">
                  Apply
                </Link>
              </form>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="sub-total-wrap">
                <div className="essential-button">
                  <Link href="#" className="esn-btn">
                    Continue Shopping
                  </Link>
                  <Link href="#" className="esn-btn">
                    Update Cart
                  </Link>
                </div>
                <div className="sub-total-box">
                  <div className="sub-total-inner">
                    <div className="sub-total-amount">
                      <h4>Subtotal</h4>
                      <p className="the-amount">$670.00</p>
                    </div>
                    <div className="shipping">
                      <h6>Shipping</h6>
                      <form action="#">
                        <ul>
                          <li className="ship-items-wrap">
                            <input
                              type="radio"
                              name="shipping-choice"
                              id="free-shipping"
                             defaultValue="free-shipping"
                            />
                            <div className="ship-items">
                              <label htmlFor="free-shipping">Free Shipping</label>
                              <span>+$00.00</span>
                            </div>
                          </li>
                          <li className="ship-items-wrap">
                            <input
                              type="radio"
                              name="shipping-choice"
                              id="flat-rate"
                             defaultValue="flat-rate"
                              defaultChecked
                            />
                            <div className="ship-items">
                              <label htmlFor="flat-rate">Flat Rate</label>
                              <span>+$10.00</span>
                            </div>
                          </li>
                          <li className="ship-items-wrap">
                            <input
                              type="radio"
                              name="shipping-choice"
                              id="local-delivery"
                             defaultValue="local-delivery"
                            />
                            <div className="ship-items">
                              <label htmlFor="local-delivery">Local Delivery</label>
                              <span>+$20.00</span>
                            </div>
                          </li>
                        </ul>
                      </form>
                    </div>
                    <div className="calculate-shipping">
                      <h6>Calculate Shipping</h6>
                      <ShippingCountry/>
                    </div>
                    <form action="#" className="zip-code">
                      <input
                        type="text"
                        name="zip-code"
                        id="zip-code"
                        placeholder="Postcode / ZIP"
                      />
                    </form>
                    <div className="essential-button-2">
                      <Link href="#" className="esn-btn">
                        Update Cart
                      </Link>
                    </div>
                    <div className="sub-total-amount final-price">
                      <h4>Total</h4>
                      <p className="the-amount">$700.00</p>
                    </div>
                    <Link href="/checkout" className="to-checkout-btn button-b">
                      Proceed to Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProceedToPay;
