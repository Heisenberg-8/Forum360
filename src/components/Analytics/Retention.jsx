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
    PointElement,
    Filler,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    Filler,
  );




  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Percentage in-meeting now vs peak',
        position: 'bottom',
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
        color: 'white',
      
      },
      y: {
        display: true,
        grid: {
          display: false, 
          color: 'white', 
        },
        color: 'white',
      },
    },
  };



  const labels = ['', '', '', '', ''];
  const dataset1Data = [20, 40, 30, 35, 30];
  const lastPointIndex = dataset1Data.length - 1;



  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: dataset1Data,
        borderColor: '#9747FF',
        backgroundColor: 'rgba(151, 71, 255, 0.5)', 
        fill: {
          target: 'origin',
          above: 'rgba(151, 71, 255, 0.15)',

        },
        point: true,
        pointRadius: dataset1Data.map((_, index) => (index === lastPointIndex ? 5 : 0)), 
        pointBorderColor: dataset1Data.map((_, index) => (index === lastPointIndex ? 'white' : '#9747FF')), 
        pointBackgroundColor: dataset1Data.map((_, index) => (index === lastPointIndex ? '#9747FF' : 'rgba(151, 71, 255, 0.5)')), 
        pointBorderWidth: dataset1Data.map((_, index) => (index === lastPointIndex ? 2 : 0)), 

      },
    ],
  };







  function RR() {
    return (
      <div className="bigContainer">
      <div style={{ display: "flex" }}>
            <text className="headingSmallCard"  style={{ marginLeft: "6%", marginTop: "3%",whiteSpace: 'nowrap'  }}>Retention Rates</text>
            <text className="headingSmallCard"  style={{ marginLeft: "14%", marginTop: "3%" }}>&gt;90%</text>
            <img src={pin} style={{ marginLeft: "5%", marginRight: "3%", marginTop: "1%" }} />
          </div>
          <text style={{ fontFamily: "albert", fontSize: "12px", color: "#b1afaf", marginLeft: "6%" }}>98 of 163 Registered</text>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", marginTop: "-20px" }}>
    <div style={{ width: "90%", marginLeft: "0px", marginTop: "10px" }}>
      <Line options={options} data={data} />
    </div>
  </div>

      </div>
    );
  }
  export default RR;