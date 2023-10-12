// import React, { useState } from "react";
// import CanvasJSReact from "@canvasjs/react-charts";

// const CanvasJSChart = CanvasJSReact.CanvasJSChart;

// const Graphone = () => {
//   const [options] = useState({
//     animationEnabled: true,
//     theme: "light2",
//     title: {
//       //   text: "Growth of Photovoltaics",
//     },
//     axisY: {
//       title: "Capacity (in MWp)",
//       logarithmic: true,
//     },
//     data: [
//       {
//         type: "spline",
//         showInLegend: true,
//         legendText: "MWp = one megawatt peak",
//         dataPoints: [
//           { x: new Date(2001, 0), y: 1615 },
//           { x: new Date(2002, 0), y: 2069 },
//           { x: new Date(2003, 0), y: 2635 },
//           { x: new Date(2004, 0), y: 3723 },
//           { x: new Date(2005, 0), y: 5112 },
//           { x: new Date(2006, 0), y: 6660 },
//           { x: new Date(2007, 0), y: 9183 },
//           { x: new Date(2008, 0), y: 15844 },
//           { x: new Date(2009, 0), y: 23185 },
//           { x: new Date(2010, 0), y: 40336 },
//           { x: new Date(2011, 0), y: 70469 },
//           { x: new Date(2012, 0), y: 100504 },
//           { x: new Date(2013, 0), y: 138856 },
//           { x: new Date(2014, 0), y: 178391 },
//           { x: new Date(2015, 0), y: 229300 },
//           { x: new Date(2016, 0), y: 302300 },
//           { x: new Date(2017, 0), y: 405000 },
//         ],
//       },
//     ],
//   });

//   const containerStyle = {
//     backgroundImage: `url('https://your-graph-image-url.jpg')`,
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     height: "180px", // Adjust height as needed
//     width: "100%", // Set width to 100% to match the card
//     borderRadius: "10px", // Add border-radius for rounded corners
//   };

//   return (
//     <div style={containerStyle}>
//       <CanvasJSChart options={options} />
//     </div>
//   );
// };

// export default Graphone;

import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Graphone = () => {
  const [chartData] = useState({
    series: [
      {
        name: "Inflation",
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: 10,
        style: {
          fontSize: "0px",
          colors: ["#304758"],
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
          "Oct",
          "Nov",
          "Dec",
        ],
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          },
        },
      },
      title: {
        text: "Monthly Inflation in Argentina, 2002",
        floating: true,
        offsetY: 330,
        align: "center",
        style: {
          color: "black",
          width: "1px",
        },
      },
    },
  });

  return (
    <div className="  text-green-400 bg-green-500 rounded-lg" id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={180}
      />
    </div>
  );
};

export default Graphone;
