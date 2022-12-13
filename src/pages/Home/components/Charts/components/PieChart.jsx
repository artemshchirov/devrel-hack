import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

const backgroundColors = [
  '#42A5F5',
  '#66BB6A',
  '#FFA726',
  '#1dd5e4',
  '#ce033c',
  '#d1bef0',
  '#2bfb11',
  '#ba22c5',
  '#eb7a45',
  '#7a80a2',
];

// FIXME: null in PieChart
// FIXME: PieChart unable for 20st + users
const PieChart = ({ pieChartData }) => {
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

  useEffect(() => {
    const datasetLabels = Object.keys(pieChartData).slice(0, 10);
    const dataset = Object.values(pieChartData).slice(0, 10);
    setChartData({
      labels: datasetLabels,
      datasets: [
        {
          data: dataset,
          backgroundColor: backgroundColors,
          hoverBackgroundColor: ['#B3FFFFFF'],
        },
      ],
    });
  }, [pieChartData]);

  return (
    <Chart
      type="pie"
      data={chartData}
      options={lightOptions}
      style={{ position: 'relative', width: '40%' }}
    />
  );
};

export default PieChart;
