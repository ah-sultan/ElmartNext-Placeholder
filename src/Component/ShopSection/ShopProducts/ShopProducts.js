import ProductCard from "../ProductCard/ProductCard";
import shopProductData from "./shopProductData.json";

const ShopProducts = ({ shopListView }) => {
  return (
    <>
      <div className="row p-0">
        {shopProductData && Array.isArray(shopProductData) && [...shopProductData].map((data, index) => {
          return (
            <div
              key={index}
              className={` col-12  shop-product-items ${
                shopListView ? "shop-list-view" : "col-sm-6 col-lg-4 "
              }`}
            >
              <ProductCard {...data} cardType="shop" isList={shopListView ? true : false } />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShopProducts;
