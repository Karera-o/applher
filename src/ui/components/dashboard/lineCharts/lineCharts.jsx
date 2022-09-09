import React from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineCharts() {
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", 'Apr', 'May','June','July'],
    datasets: [
      {
        data: [10,20,30,20,50,60,50],
        label: "Projects",
        borderColor: "#3333ff",
        lineTension: 0.5
      },
      {
        data: [1,15,10,60,40,32,70],
        label: "Progress",
        borderColor:'hsl(162, 66%, 66%)',
        backgroundColor: "hsl(162, 66%, 90%)",
        lineTension: 0.5
      }
    ]
  };

  return (
    <div className="App">
      
      <Line
      
      width={200}
      height={100}
      data={lineChartData}
    />
    </div>
  )
}

export default LineCharts