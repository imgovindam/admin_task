import React from "react";
import ReactApexChart from "react-apexcharts";

const Graphthree = () => {
  const series = [
    {
      name: "",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ];

  const options = {
    chart: {
      height: 30,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      //   text: "Product Trends by Month",
      align: "right",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
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
        "Sep",
      ],
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        className="bg-yellow-500 rounded-lg text-black"
        options={options}
        series={series}
        // type="line"
        // height={180}
      />
    </div>
  );
};

export default Graphthree;
