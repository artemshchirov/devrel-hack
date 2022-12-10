import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

const backgroundColor = [
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
// TODO: implement jsonApi
const PieChart = ({ data }) => {
  const [datasetLabels, setDatasetLabels] = useState(
    Object.keys(data).slice(0, 10),
  );
  const [dataset, setDataset] = useState(Object.values(data).slice(0, 10));

  const [chartData, setChartData] = useState({
    labels: datasetLabels,
    datasets: [
      {
        data: dataset,
        data: dataset.slice(0, 10),
        backgroundColor: backgroundColor,
        hoverBackgroundColor: ['#B3FFFFFF'],
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
    const newDatasetLabels = Object.keys(data);
    const newDataset = Object.values(data);

    setDatasetLabels(newDatasetLabels);
    setDataset(newDataset);

    setChartData({
      labels: datasetLabels.slice(0, 10),
      datasets: [
        {
          data: dataset.slice(0, 10),
          backgroundColor: backgroundColor,
          hoverBackgroundColor: ['#B3FFFFFF'],
        },
      ],
    });
  }, [data]);

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
