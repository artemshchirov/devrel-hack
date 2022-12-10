import { useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';

// TODO: implement jsonApi
const DoughnutChart = ({ jsonApi }) => {
  const [issues, setIssues] = useState({});

  useEffect(() => {
    // setIssues(jsonApi.getIssuesCount());
  }, []);

  const [chartData] = useState({
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        data: [300, 50, 100],
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
