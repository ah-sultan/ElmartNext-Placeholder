"use client";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PieChart = () => {
  const chartData = {
    series: [200, 400, 147, 298],

    options: {
      colors: ["#FF0000", "#2639FF", "#FF497C", "#00A01A"],
      labels: [
        "Pending Orders",
        "Completed Orders",
        "Pending Payments",
        "Received Payments",
      ],
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 375,
          options: {
            chart: {
              width: "100%",
              height: 300,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div id="sellerPie">
      <ApexChart
        type="donut"
        options={chartData.options}
        series={chartData.series}
        width={"100%"}
        height={337}
      />
    </div>
  );
};

export default PieChart;
