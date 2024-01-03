"use client";

import AreaChart from "./AreaChart";
import PieChart from "./PieChart";
// import AreaChart from "./AreaChart";
import RecentOrders from "./RecentOrders";
import TrendProducts from "./TrendProducts";

const StoreSummary = () => {
  return (
    <>
      <div className="row store-summary">
        <div className="col-lg-6">
          <div className="seller-pie-chart">
            <h3>Overall Sales</h3>
            <PieChart />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="seller-pie-chart">
            <h3>Analytics</h3>
            <AreaChart />
          </div>
        </div>
      </div>
      <div className="row store-summary">
        <div className="col-lg-6">
          <RecentOrders />
        </div>
        <div className="col-lg-6">
          <TrendProducts/>
        </div>
      </div>
    </>
  );
};

export default StoreSummary;
