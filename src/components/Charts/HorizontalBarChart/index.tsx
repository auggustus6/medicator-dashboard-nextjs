import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
    },
    title: {
      display: true,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};

const labels = [
  "Em Branco",
  "SAO JOSE DOS CAMPOS-SP",
  "CACAPAVA-SP",
  "CAMPINAS-SP",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 2",
      data: [900, 200, 300, 400],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const HorizontalBarChart = () => {
  return <Bar options={options} data={data} />;
};

export default HorizontalBarChart;
