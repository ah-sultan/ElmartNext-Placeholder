import shopProdCategoryData from "./shopProdCategoryData.json";

const ShopCategoryFilter = () => {
  return (
    <>
      <div className="lsb-widget-1">
        <h2 className="lsb-widget-title">Product Categories</h2>
        <form action="#">
          <ul>
            {shopProdCategoryData && Array.isArray(shopProdCategoryData) && [...shopProdCategoryData].map((item, index) => {
              return (
                <li key={index} className="check-items-wrap">
                  <input
                    type="checkbox"
                    name="product-category"
                    value={item.id}
                    id={item.id}
                  />
                  <div className="check-items">
                    <label htmlFor="{item.id}">{item.name}</label>
                    <span>{item.count}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </form>
      </div>
    </>
  );
};

export default ShopCategoryFilter;
