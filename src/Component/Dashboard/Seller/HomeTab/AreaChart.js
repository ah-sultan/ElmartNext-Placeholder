"use client";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const AreaChart = () => {
  const chartData = {
    options: {
      chart: {
        type: "area",
        stacked: true,
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      dataLabels: {
        enabled: true,
        formatter: function (value, { seriesIndex, dataPointIndex, w }) {
          if (w.globals.hoveredSeries !== seriesIndex) {
            return "";
          }
          return value;
        },
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
    // Series Options

    series: [
      {
        name: "Total Products",
        data: [10, 25, 35, 50, 55, 66, 80, 98, 125, 145, 180, 200],
      },
      {
        name: "Total Orders",
        data: [40, 150, 48, 210, 11, 42, 240, 300, 100, 120, 160, 200],
      },
      {
        name: "Total Sales",
        data: [19, 149, 40, 220, 0, 48, 200, 30, 100, 119, 190, 300],
      },
      {
        name: "Total Revenue",
        data: [10, 20, 25, 30, 35, 40, 45, 50, 60, 80, 90, 52],
      },
    ],
  };

  return (
    <div id="sellerAreaChart">
      <ApexChart
        options={chartData.options}
        series={chartData.series}
        height={330}
        width={"100%"}
        type="area"
      />
    </div>
  );
};

export default AreaChart;
