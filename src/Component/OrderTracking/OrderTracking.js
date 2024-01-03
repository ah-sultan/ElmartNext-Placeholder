const OrderTracking = () => {
  return (
    <>
      <section className="order-tracking">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="order-tracking-title">
                <h2>Track Your Order</h2>
                <p>
                  {`To track your order please enter your Order ID and email (that
                  you used to place the order) in the box below and click on
                  "Track Order" button.`}
                </p>
              </div>
              <form action="#">
                <div className="order-tracking-input">
                  <label htmlFor="order-id">Order ID</label>
                  <input
                    type="text"
                    name="order-track"
                    id="order-id"
                    placeholder="Found in order confirmation Email"
                  />
                  <label htmlFor="order-email">Order Email</label>
                  <input
                    type="email"
                    name="order-track"
                    id="order-email"
                    placeholder="Email you used while checkout"
                  />
                </div>
                <input
                  className="button-b"
                  type="submit"
                  name="order-track"
                  id="track-btn"
                  defaultValue="Track Order"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderTracking;
