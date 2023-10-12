import React from "react";
import ReactApexChart from "react-apexcharts";

const Graphtwo = () => {
  const series = [44, 55, 13, 43, 22];
  const options = {
    chart: {
      width: 300,
      type: "pie",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 80,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "Top",
          },
        },
      },
    ],
  };

  return (
    <div id="chart">
      <ReactApexChart
        className="text-black rounded bg-[#f198b695]"
        options={options}
        series={series}
        type="pie"
        width={320}
      />
    </div>
  );
};

export default Graphtwo;
