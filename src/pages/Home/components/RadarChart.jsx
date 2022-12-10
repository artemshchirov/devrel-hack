import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

const jsonApiUrl =
  'https://artemshchirov.github.io/devrel-github-api/users_events.json';

// TODO: implement jsonApi
const RadarChart = ({ jsonApi }) => {
  const [issues, setIssues] = useState([]);
  const [issuesComments, setIssuesComments] = useState([]);
  const [issuesClosed, setIssuesClosed] = useState([]);

  const [labelsName, setLabelsName] = useState([]);

  const sortEventUsers = (obj, byValue) => {
    const sortData = Object.fromEntries(Object.entries(obj));
    const sortable = [];
    for (let x in sortData) sortable.push([x, sortData[x]]);
    const result = sortable.sort((a, b) => b[1][byValue] - a[1][byValue]);
    return result;
  };

  useEffect(() => {
    // Get user issues
    fetch(jsonApiUrl)
      .then((res) => res.json())
      .then((res) => {
        const usersSortedByIssues = sortEventUsers(res, 'issues_cnt');
        const topUsers = usersSortedByIssues.map((arr) => arr[0]).slice(0, 10);
        setLabelsName(topUsers);

        const topIssues = usersSortedByIssues
          .map((arr) => arr[1].issues_cnt)
          .slice(0, 10);

        setIssues(topIssues);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    // Get all users issues comments
    fetch(jsonApiUrl)
      .then((res) => res.json())
      .then((res) => {
        const usersSortedByCommentIssues = sortEventUsers(
          res,
          'issues_comments_cnt',
        );

        const topIssuesComments = usersSortedByCommentIssues
          .map((arr) => arr[1].issues_comments_cnt)
          .slice(0, 10);

        setIssuesComments(topIssuesComments);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    // Get all users closed issues
    fetch(jsonApiUrl)
      .then((res) => res.json())
      .then((res) => {
        const usersSortedByClosedIssues = sortEventUsers(
          res,
          'issues_closed_cnt',
        );

        const topIssuesClosed = usersSortedByClosedIssues
          .map((arr) => arr[1].issues_closed_cnt)
          .slice(0, 10);

        setIssuesClosed(topIssuesClosed);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log('issues: ', issues);

    // const newDatasetLabels = Object.keys(issues);
    // const newDataset = Object.values(issues);

    // setDatasetLabels(newDatasetLabels);
    // setDataset(newDataset);

    setChartData({
      labels: labelsName,
      datasets: [
        {
          label: 'Issues',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: issues,
        },
        {
          label: 'Issues Comments',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: issuesComments,
        },
        {
          label: 'Issues Closed',
          backgroundColor: 'rgba(142,99,132,0.2)',
          borderColor: 'rgba(142,99,132,1)',
          pointBackgroundColor: 'rgba(142,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(142,99,132,1)',
          data: issuesClosed,
        },
      ],
    });
  }, [issues]);

  const [chartData, setChartData] = useState({
    labels: labelsName,
    datasets: [
      {
        label: 'Issues',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: 'Issues Comments',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [28, 48, 40, 19, 96, 27, 100],
      },
      {
        label: 'Issues Closed',
        backgroundColor: 'rgba(142,99,132,0.2)',
        borderColor: 'rgba(142,99,132,1)',
        pointBackgroundColor: 'rgba(142,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(142,99,132,1)',
        data: [28, 48, 40, 19, 96, 27, 100],
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
    scales: {
      r: {
        pointLabels: {
          color: '#495057',
        },
        grid: {
          color: '#ebedef',
        },
        angleLines: {
          color: '#ebedef',
        },
      },
    },
  });

  function fetchIssuesCount() {}

  return (
    <Chart
      type="radar"
      data={chartData}
      options={lightOptions}
      style={{ position: 'relative', width: '40%' }}
    />
  );
};

export default RadarChart;
