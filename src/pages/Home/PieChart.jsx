import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

// FIXME: null in PieChart
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
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
        hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D'],
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
    setDatasetLabels(Object.keys(data).slice(0, 10));
    setDataset(Object.values(data).slice(0, 10));
    console.log('dataset: ', dataset);
    setChartData({
      labels: datasetLabels,
      datasets: [
        {
          data: dataset,
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
          hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D'],
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
