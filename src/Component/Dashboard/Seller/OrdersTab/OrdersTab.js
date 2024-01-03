import Pagination from "@/Component/widgets/Pagination/Pagination";
import ordersData from "./ordersData.json";

const OrdersTab = () => {
  return (
    <>
      <div id="seller-dshbrd-orders">
        <h2>All Orders</h2>
        <table>
          <thead>
            <tr className="seller-orders-heading">
              <th scope="col" className="slnum">
                SL Number
              </th>
              <th scope="col" className="orderid">
                Order ID
              </th>
              <th scope="col" className="product">
                Product
              </th>
              <th scope="col" className="status">
                Status
              </th>
              <th scope="col" className="cart-button">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {ordersData &&
              Array.isArray(ordersData) &&
              [...ordersData].map((data, index) => {
                const { id, orderId, title, status, price } = data;
                return (
                  <tr key={index} className="seller-orders-item">
                    <td className="slnum" data-title="SL Number">
                      <p>{index + 1}</p>
                    </td>
                    <td className="orderid" data-title="Order ID">
                      <p>#{orderId}</p>
                    </td>
                    <td className="product" data-title="Product">
                      <p>{title}</p>
                    </td>
                    <td className="status" data-title="Status">
                      {status.toLowerCase() === "delivered" && (
                        <p className="delivered">Delivered</p>
                      )}
                      {status.toLowerCase() === "canceled" && (
                        <p className="canceled">Canceled</p>
                      )}
                      {status.toLowerCase() === "onhold" && (
                        <p className="on-hold">On Hold</p>
                      )}
                      {status.toLowerCase() === "pending" && (
                        <p className="pending">Pending</p>
                      )}
                    </td>
                    <td className="price" data-title="Price">
                      <p>${price}</p>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="shop-page-navigation">
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default OrdersTab;
