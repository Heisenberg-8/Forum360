import React from 'react';
import { Line } from 'react-chartjs-2';
import './Retention.css';
import { Chart, LinearScale } from 'chart.js';

// Register the "linear" scale
Chart.register(LinearScale);
const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Sample Data',
      data: [12, 19, 3, 5, 2, 3, 10],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const chartOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

function Retention() {
  return (
    <div className="main">
      <div className="bigContainer1">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}

export default Retention;
