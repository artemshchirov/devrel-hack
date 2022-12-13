import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

const backgroundColors = [
  '#42A5F5',
  '#66BB6A',
  '#FFA726',
  '#26C6DA',
  '#7E57C2',
  '#ce033c',
  '#d1bef0',
  '#2bfb11',
  '#ba22c5',
  '#eb7a45',
];

const PolarAreaChart = ({ polarChartData }) => {
  const [chartData, setChartData] = useState({});
  const [lightOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: '#495057',
        },
      },
    },
    scales: {
      r: {
        grid: {
          color: '#ebedef',
        },
      },
    },
  });

  const topUsers = polarChartData.slice(0, 10);
  const topContributorsNamesDataset = topUsers.map((user) => user.labelsName);
  const topContributorsCommitsDataset = topUsers.map((user) => user.dataset);

  useEffect(() => {
    setChartData({
      datasets: [
        {
          data: shuffle(topContributorsCommitsDataset),
          backgroundColor: backgroundColors,
          label: 'Top 10 contributors',
        },
      ],
      labels: shuffle(topContributorsNamesDataset),
    });
  }, [polarChartData]);

  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  return (
    <Chart
      type="polarArea"
      data={chartData}
      options={lightOptions}
      style={{ position: 'relative', width: '40%' }}
    />
  );
};

export default PolarAreaChart;
