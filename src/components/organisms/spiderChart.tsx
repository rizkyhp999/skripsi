import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

interface SpiderChartProps {
  data: Array<{
    name: string;
    data: number[];
  }>;
  categories: string[];
}

const DynamicChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SpiderChart: React.FC<SpiderChartProps> = ({ data, categories }) => {
  const defaultCategories = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6",
    "Category 7",
    "Category 8",
    "Category 9",
    "Category 10",
  ];
  const defaultData = [
    { name: "Default", data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
  ];

  const trimmedCategories = categories.map((category) =>
    category.length > 10 ? `${category.substring(0, 10)}...` : category
  );

  const chartOptions: ApexOptions = {
    chart: {
      type: "radar",
      height: "100%",
      width: "100%",
    },
    title: {
      text: "Indeks Faktor Daya Hidup Bahasa Daerah",
    },
    xaxis: {
      categories: categories.length > 0 ? trimmedCategories : defaultCategories,
    },
  };

  return (
    <div className="w-full h-full">
      <DynamicChart
        options={chartOptions}
        series={data.length > 0 ? data : defaultData}
        type="radar"
        height="100%"
        width="100%"
      />
    </div>
  );
};

export default SpiderChart;
