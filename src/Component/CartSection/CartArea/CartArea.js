import CartItem from "./CartItem";
import cartData from "./cartData.json";
const CartArea = () => {
  const sizes = ["Products", "Size", "Price", "Quantity", "Total", "Action"];
  return (
    <>
      <div className="cart-section">
        <div className="container">
          <table>
            <thead>
              <tr className="wishlist-heading">
                {[...sizes].map((title, index) => {
                  return (
                    <th key={index} scope="col" className="close-icon">
                      {title}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {[...cartData].map((data, index) => {
                return <CartItem key={index} {...data} index={index} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CartArea;
