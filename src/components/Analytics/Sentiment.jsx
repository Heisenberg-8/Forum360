import React, { useState, useEffect } from 'react';
import "./Sentiment.css"
import pin from '../assets/pin.svg';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { getmetricanalytics } from "../data";
import { getToken } from "../token";

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

const Sentiment = () => {
  const token = getToken();
  const [regUser, setregUser] = useState(0);
  const [attendUser, setattendUser] = useState(0);
  const labels = ['', '', '', '', ''];
  const dataset1Data = [0, 0.2, -0.3, 0.5, 1];
  const dataset2Data = [0, -0.4, 0.2, -0.7, 0.3];
  const lastPointIndex = dataset1Data.length - 1;

  useEffect(() => {
    getmetricanalytics(token)
      .then((analyticsdata) => {
        setregUser(analyticsdata.RegUser);
        setattendUser(analyticsdata.AttendUser);
      });
  }, []);

  const initialData = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: dataset1Data,
        borderColor: ' rgb(114, 181, 229)',
        backgroundColor: ' rgb(114, 181, 229)',
        fill:'none',
        // fill: {
        //   target: 'origin',
        //   above: 'rgba(151, 71, 255, 0.1)',
        //   below: 'rgba(151, 71, 255, 0.1)',
        // },
        point: true,
        pointRadius: dataset1Data.map((_, index) => (index === lastPointIndex ? 5 : 0)),
        pointBorderColor: dataset1Data.map((_, index) => (index === lastPointIndex ? 'white' : '#9747FF')),
        pointBackgroundColor: dataset1Data.map((_, index) => (index === lastPointIndex ? ' rgb(114, 181, 229)' : 'rgba(151, 71, 255, 0.5)')),
        pointBorderWidth: dataset1Data.map((_, index) => (index === lastPointIndex ? 2 : 0)),
      },
      {
        label: 'Dataset 2',
        data: dataset2Data,
        borderColor: 'rgba(227, 191,0)',
        backgroundColor: 'rgba(227, 191, 0, 0.1)',
        fill:'start',
        // fill: {
        //   target: 'origin',
        //   above: 'rgba(255, 99, 71, 0.1)',
        //   below: 'rgba(255, 99, 71, 0.1)',
        // },
        point: true,
        pointRadius: dataset2Data.map((_, index) => (index === lastPointIndex ? 5 : 0)),
        pointBorderColor: dataset2Data.map((_, index) => (index === lastPointIndex ? 'white' : 'rgba(227, 191,0)')),
        pointBackgroundColor: dataset2Data.map((_, index) => (index === lastPointIndex ? 'rgba(227, 191,0)' : 'rgba(227, 191,0)')),
        pointBorderWidth: dataset2Data.map((_, index) => (index === lastPointIndex ? 2 : 0)),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: 'Percentage in-meeting now vs peak',
        position: 'bottom',
      },
    },
    scales: {
      x: {
        display: true,
        border: {
          color: '#a1a2a5',
        },
        grid: {
          display: false,
        },
        color: 'white',
      },
      y: {
        display: true,
        border: {
          color: '#a1a2a5',
        },
        ticks: {
          color: '#a1a2a5',
        },
        grid: {
          display: false,
          color: 'white',
        },
        color: 'white',
        ticks: {
          color: '#a1a2a5',
          callback: function (value, index, values) {
            if (index === 0 || index === values.length - 2) {
              return value;
            }
            return '';
          },
        },
      },
    },
  };

  return (
    <div className="bigContainer" style={{marginTop:8}}>
      <div style={{ display: "flex" }}>
        <text className="headingSmallCard" style={{ marginLeft: "6%", marginTop: "3%", whiteSpace: 'nowrap' }}>Sentiment</text>
        <text className="headingSmallCard" style={{ marginLeft: "27%", marginTop: "3%" }}>Neutral</text>
        <img src={pin} style={{ marginLeft: "5%", marginRight: "3%", marginTop: "1%" }} />
      </div>
      <div>
      <text style={{ fontFamily: "albert", fontSize: "12px", color: "#b1afaf", marginLeft: "6%" }}>Overall real-time analysis</text>
      <text style={{ fontFamily: "albert", fontSize: "12px", color: "#b1afaf", marginLeft: "19%" }}>0.45</text>

      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", marginTop: "-20px" }}>
        <div style={{ width: "90%", marginLeft: "0px", marginTop: "10px" }}>
          <Line options={options} data={initialData} />
        </div>
      </div>
      <div style={{ display: 'flex', marginTop: "6px",marginLeft:"16%" }}>
    
        <button style={{ backgroundColor: "rgba(227, 191,0)", marginTop: '-50', height: 12, width: 7, borderRadius: "50%", border: "none", marginLeft: "25px" }}></button>
        <text style={{ color: "a1a2a5", whiteSpace: 'nowrap', marginTop: '-50', fontSize: '12px', marginLeft: "5px" }}>Participants</text>
        <button style={{ backgroundColor: "rgb(114, 181, 229)", marginTop: '-50', height: 12, width: 7, borderRadius: "50%", border: "none", marginLeft: "25px" }}></button>
        <text style={{ color: "a1a2a5", whiteSpace: 'nowrap', marginTop: '-50', fontSize: '12px', marginLeft: "5px" }}>Host</text>
      </div>
    </div>
  );
};

export default Sentiment;
