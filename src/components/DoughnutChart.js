import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
);

const DoughnutChart = () => {
  const data = {
    labels: ['Blue', 'Green'],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ['rgba(25, 181, 254, 1)', 'rgba(77, 175, 124, 1)'],
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-800 text-white shadow rounded-lg">
      <div>
        <p>Net Profit</p>
        <strong className="text-2xl">$ 6759.25</strong>
      </div>
      <div className="w-20">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DoughnutChart;
