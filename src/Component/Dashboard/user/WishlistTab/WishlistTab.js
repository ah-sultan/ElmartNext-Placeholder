import ProductCard from "@/Component/ShopSection/ProductCard/ProductCard";
import wishListData from "./wishListData.json";

const WishlistTab = () => {
  return (
    <>
      <div id="user-dshbrd-wishlist">
        <h2>My Wishlist</h2>
        <div className="container p-0 shop-all-product-area">
          <div className="row p-0">
            {wishListData &&
              Array.isArray(wishListData) &&
              [...wishListData].map((data, index) => {
                return (
                  <div
                    className="col-xl-4 col-12 col-sm-6 shop-product-items"
                    key={index}
                  >
                    <ProductCard cardType="shop" key={index} {...data} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistTab;
