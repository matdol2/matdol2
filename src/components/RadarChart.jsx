import React from "react";
import ApexChart from "react-apexcharts";

const RadarChart = ({ data, name }) => {
  return (
    <ApexChart
      options={{
        chart: {
          height: 350,
          type: "radar",
        },
        xaxis: {
          categories: ["전문성", "개그력", "꼰대력", "리더십", "감수성"],
        },
      }}
      series={[
        {
          name,
          data,
        },
      ]}
      type="radar"
      height={350}
    />
  );
};

export default RadarChart;
