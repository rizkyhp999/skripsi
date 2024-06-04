"use strict";
import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import {
  RadarController,
  PointElement,
  LineElement,
  RadialLinearScale,
} from "chart.js";

Chart.register(
  ...registerables,
  RadarController,
  PointElement,
  LineElement,
  RadialLinearScale
);

interface SpiderChartProps {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[];
}

const SpiderChart: React.FC<SpiderChartProps> = ({ labels, datasets }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        const myChart = new Chart(ctx, {
          type: "radar",
          data: {
            labels,
            datasets,
          },
          options: {
            scales: {
              r: {
                beginAtZero: true,
                max: 1, // Set maximum value for the scale
                ticks: {
                  stepSize: 0.2, // Adjust step size as needed
                },
                pointLabels: {
                  // Target axis labels specifically
                  font: {
                    size: 14, // Set desired font size
                  },
                },
              },
            },
            plugins: {
              legend: {
                display: true,
                position: "top",
                labels: {
                  // Font size adjustments
                  font: {
                    size: 20, // Larger font for legend labels
                  },
                },
              },
            },
            elements: {
              line: {
                tension: 0, // Disable bezier curves
              },
            },
          },
        });

        return () => {
          myChart.destroy(); // Clean up on unmount
        };
      }
    }
  }, [labels, datasets]);

  return <canvas ref={chartRef} className="bg-white"></canvas>;
};

export default SpiderChart;
