import OrderTabsCard from "./OrderTabsCard";
import ordersData from "./ordersData.json";
const OrdersTab = () => {
  return (
    <>
      <div id="user-dshbrd-orders">
        <h2>My Orders History</h2>
        {ordersData &&
          Array.isArray(ordersData) &&
          [...ordersData].map((data, index) => {
            return <OrderTabsCard key={index} {...data} />;
          })}
      </div>
    </>
  );
};

export default OrdersTab;
