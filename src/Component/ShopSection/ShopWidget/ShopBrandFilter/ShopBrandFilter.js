import shopProdBrandData from "./shopProdBrandData.json";

const ShopBrandFilter = () => {
  return (
    <>
      <div className="lsb-widget-3">
        <h2 className="lsb-widget-title">Brands</h2>
        <form action="#">
          <ul>
            {shopProdBrandData &&
              Array.isArray(shopProdBrandData) &&
              [...shopProdBrandData].map((item, index) => {
                return (
                  <li key={index} className="check-items-wrap">
                    <input
                      type="checkbox"
                      id={item.id}
                      name={item.name}
                      value={item.value}
                    />
                    <div className="check-items">
                      <label htmlFor="{item.id}">{item.name}</label>
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

export default ShopBrandFilter;
