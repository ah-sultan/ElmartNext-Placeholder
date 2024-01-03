import storeData from "./data/storeData.json";
const RecentOrders = () => {
  return (
    <>
      <h3>Recent Orders</h3>
      <table>
        <thead>
          <tr className="seller-orders-heading">
            <th scope="col" className="orderid">
              Order ID
            </th>
            <th scope="col" className="product">
              Product
            </th>
            <th scope="col" className="status">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {storeData.recentOrders &&
            Array.isArray(storeData.recentOrders) &&
            [...storeData.recentOrders].map((data, index) => {
              const { id, title, status } = data;
              return (
                <tr key={index} className="seller-orders-item">
                  <td className="orderid" data-title="Order ID">
                    <p>#{id}</p>
                  </td>
                  <td className="product" data-title="Product">
                    <p>{title}</p>
                  </td>
                  <td className="status" data-title="Status">
                    {status?.toLowerCase() === "delivered" && (
                      <p className="delivered">Delivered</p>
                    )}
                    {status?.toLowerCase() === "canceled" && (
                      <p className="canceled">Canceled</p>
                    )}
                    {status?.toLowerCase() === "on-hold" && (
                      <p className="on-hold">On Hold</p>
                    )}
                    {status?.toLowerCase() === "pending" && (
                      <p className="pending">Pending</p>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default RecentOrders;
