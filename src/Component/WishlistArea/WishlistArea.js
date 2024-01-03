import WishlistItem from "./WishlistItem";
import wishlistData from "./wishlistData.json";

const WishlistArea = () => {
  return (
    <>
      <div className="wishlist-section">
        <div className="container">
          <table>
            <thead>
              <tr className="wishlist-heading">
                {[
                  "Products",
                  "Size",
                  "Price",
                  "Quantity",
                  "Total",
                  "Action",
                ].map((title, index) => {
                  return (
                    <th key={index} scope="col" className="close-icon">
                      {title}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {wishlistData &&
                Array.isArray(wishlistData) &&
                [...wishlistData].map((data, index) => {
                  return <WishlistItem key={index} {...data} index={index} />;
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default WishlistArea;
