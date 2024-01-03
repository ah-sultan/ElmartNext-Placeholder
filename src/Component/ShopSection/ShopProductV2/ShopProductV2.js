import ProductCardV2 from "./ProductCardV2";
import shopProductData from './shopProductData.json'
const ShopProductV2 = () => {
  return (
    <>
      <div className="row p-0">
        { shopProductData && Array.isArray(shopProductData) && [...shopProductData].map((data, index) => {
          return (
            <div
              key={index}
              className="col-lg-4 col-12 col-sm-6 shop-product-items-v2"
            >
              <ProductCardV2 {...data} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShopProductV2;
