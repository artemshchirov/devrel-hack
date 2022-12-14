import { useState, useLayoutEffect } from 'react';
import { Chart } from 'primereact/chart';

const DoughnutChart = ({ doughnutChartData }) => {
  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
  const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

  const [chartData, setChartData] = useState({});
  const [lightOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: '#495057',
        },
      },
    },
  });

  useLayoutEffect(() => {
    setChartData({
      labels: ['Issues', 'Issues Comments', 'Issues Closed'],
      datasets: [
        {
          data: shuffle([
            Math.round(getRandomArbitrary(10, 20)),
            Math.round(getRandomArbitrary(10, 20)),
            Math.round(getRandomArbitrary(1, 10)),
          ]),
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    });
  }, [doughnutChartData]);

  return (
    <Chart
      type="doughnut"
      data={chartData}
      options={lightOptions}
      style={{ position: 'relative', width: '40%' }}
    />
  );
};

export default DoughnutChart;
