import React, { useState, useEffect } from 'react';
import "./Sentiment.css"
import pin from '../assets/pin.svg';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement, Filler } from 'chart.js';
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

const RR = () => {
  const labels = ['', '', '', '', ''];
  const dataset1Data = [0, 10, 6, 3, 8];
  const lastPointIndex = dataset1Data.length - 1;

  const initialData = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: new Array(dataset1Data.length).fill(0),
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

  const [data, setData] = useState(initialData);

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
          color: '#a1a2a5'
        },
        grid: {
          display: false,
        },
        color: 'white',
      },
      y: {
        display: true,
        border: {
          color: '#a1a2a5'
        },
        ticks:{
          color: '#a1a2a5'

        },
        grid: {
          display: false, 
          color: 'white', 
        },
        color: 'white',
      },
    },
  };

  useEffect(() => {
    const animationDuration = 3000; 
    let animationFrame;
    let frame = 0;

    const animateData = () => {
      if (frame >= dataset1Data.length) {
        cancelAnimationFrame(animationFrame);
        return;
      }

      const newData = {
        ...data,
        datasets: [
          {
            ...data.datasets[0],
            data: dataset1Data.slice(0, frame + 1),
          },
        ],
      };
      setData(newData);

      frame++;
      animationFrame = requestAnimationFrame(animateData);
    };

    animationFrame = requestAnimationFrame(animateData);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

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
<div style={{display:'flex', marginTop:"3px"}}>
  <button style={{backgroundColor:"#9747FF",marginTop:'-50',height:12,width:7,borderRadius:"50%",border:"none",marginLeft:"25px"}}></button>
   <text style={{color:"a1a2a5",whiteSpace: 'nowrap',marginTop:'-50', fontSize:'12px',marginLeft:"5px"}}>Percentage in-meeting now vs peek</text>
  </div>

    </div>
  );
};

export default RR;
