import React from 'react';
import "./Sentiment.css"
import pin from '../assets/pin.svg';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Percentage in-meeting now vs peak',
      position: 'bottom'
    },
  },
  scales: {
    x: {
      display: true,
      grid: {
        display: false,
      },
      color: 'white', // Set x-axis color to white
    },
    y: {
      display: true,
      grid: {
        display: false,
      },
      color: 'white', // Set y-axis color to white
    },
  },
};

const labels = ['', '', '', ''];

const dataset1Data = [300, 450, 100, 700];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: dataset1Data,
      borderColor: '#9747FF',
      backgroundColor: (context) => {
        const gradient = context.chart.ctx.createLinearGradient(0, 0, 1, 0);
        gradient.addColorStop(0, 'rgba(0,0,0,0)');
        gradient.addColorStop(1, '#9747FF');
        return gradient;
      },
      tension: 0,
      fill: true,
      point: true, // Enable data points
      pointRadius: 1,
    },
  ],
};

function RR() {
  return (
    <div className="bigContainer">
     <div style={{ display: "flex" }}>
          <text className="headingSmallCard"  style={{ marginLeft: "6%", marginTop: "3%",whiteSpace: 'nowrap'  }}>Retention Rates</text>
          <text className="headingSmallCard"  style={{ marginLeft: "14%", marginTop: "3%" }}>>90%</text>

          <img src={pin} style={{ marginLeft: "5%", marginRight: "3%", marginTop: "1%" }} />
        </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
        <div style={{ width: "90%", marginLeft: "10px", marginTop: "10px" }}>
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
}
export default RR;