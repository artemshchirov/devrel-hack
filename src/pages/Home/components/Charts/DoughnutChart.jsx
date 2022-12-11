import { useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';

// TODO: implement jsonApi
const DoughnutChart = ({ jsonApi, data }) => {
  const shuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };

  const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const [chartData, setChartData] = useState({
    labels: ['Issues', 'Issues Comments', 'Issues Closed'],
    datasets: [
      {
        data: [431, 964, 214],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  });

  const [lightOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: '#495057',
        },
      },
    },
  });

  useEffect(() => {
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
  }, [data]);

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
