import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  //   Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  //   Legend
);

const Chart = () => {
  const data = {
    labels: [6, 9, 11, 13, 15, 17, 19, 21, 23, 25],
    datasets: [
      {
        data: [1, 5, 10, 15, 1, 5, 10, 15, 1, 5, 10, 15],
        backgroundColor: 'rgba(25, 181, 254, 1)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      //   legend: {
      //     position: 'top',
      //   },
      title: {
        display: true,
        // text: 'Chart.js Bar Chart',
      },
    },
  };

  return (
    <div className="barchat w-full h-64 md:h-56">
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;

