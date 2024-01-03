import Image from "next/image";
import storeData from "./data/storeData.json";

const TrendProducts = () => {
  return (
    <>
      <h3>Trending Products</h3>
      <table>
        <thead>
          <tr className="wishlist-heading">
            <th scope="col" className="product">
              Products
            </th>
            <th scope="col" className="price">
              Price
            </th>
            <th scope="col" className="sales">
              Sales
            </th>
          </tr>
        </thead>
        <tbody>
          {storeData.trendProducts &&
            Array.isArray(storeData.trendProducts) &&
            [...storeData.trendProducts].map((data, index) => {
              return (
                <tr key={index} className="wish-item no-bg">
                  <td className="product">
                    <div className="item-image">
                      <Image
                      quality={100}
                        width={56}
                        height={56}
                        src={data.image}
                        alt={data.title}
                        className="w-auto"
                      />
                    </div>
                    <p>{data.title}</p>
                  </td>
                  <td className="price" data-title="Price">
                    <p>${data.price}</p>
                  </td>
                  <td className="sales" data-title="Sales">
                    <p>{data.totalSales}</p>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default TrendProducts;
