import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
const LineChartData = ({color}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartConfig = {
      type: 'line',
      data: {
        labels: ['01.00', '01.00', '01.00', '01.00', '01.00', '01.00','01.00','01.00','01.00','01.00','01.00','01.00','01.00','01.00','01.00','01.00','01.00','01.00','01.00','01.00','01.00','01.00','01.00','01.00','01.00'],
        datasets: [{
          data: [65, 90, 84, 120, 56, 180, 40,57,10,90,80,100,45,98,56,78,12,96,99,100,102,75,120,66,132],
          fill: false,
            borderColor: `${color}`,
          tension: 0.2,
          pointRadius: 0, // Set point radius to zero
        //   pointHoverRadius: 0, // Set point hover radius to zero
        }]
      },
      options: {
            // scales: {
            //   x: {
            //     display: false
            //   },
            //   y: {
            //     display: false
            //   }
            // },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    };

    const chartInstance = new Chart(chartRef.current, chartConfig);

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return <canvas ref={chartRef} className= 'chart-canvas'/>;
};

export default LineChartData;
