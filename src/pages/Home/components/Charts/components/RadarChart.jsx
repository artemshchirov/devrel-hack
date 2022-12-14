import { useState, useLayoutEffect } from 'react';
import { Chart } from 'primereact/chart';

const JSON_API_URL =
  'https://artemshchirov.github.io/devrel-json-api/users_events.json';

const RadarChart = () => {
  const [labelsName, setLabelsName] = useState([]);
  const [issues, setIssues] = useState([]);
  const [issuesComments, setIssuesComments] = useState([]);
  const [issuesClosed, setIssuesClosed] = useState([]);

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

  const [chartData, setChartData] = useState({});

  const sortEventUsers = (obj, byValue) => {
    const sortData = Object.fromEntries(Object.entries(obj));
    const sortable = [];
    for (let x in sortData) sortable.push([x, sortData[x]]);
    const result = sortable.sort((a, b) => b[1][byValue] - a[1][byValue]);
    return result;
  };

  useLayoutEffect(() => {
    // Get user events data
    const fetchUsersEvents = async (url) => {
      try {
        const response = await fetch(url);
        const results = await response.json();

        const usersSortedByIssues = sortEventUsers(results, 'issues_cnt');
        const usersSortedByCommentIssues = sortEventUsers(
          results,
          'issues_comments_cnt',
        );
        const usersSortedByClosedIssues = sortEventUsers(
          results,
          'issues_closed_cnt',
        );

        const topUsers = usersSortedByIssues.map((arr) => arr[0]).slice(0, 10);
        const topIssues = usersSortedByIssues
          .map((arr) => arr[1].issues_cnt)
          .slice(0, 10);
        const topIssuesComments = usersSortedByCommentIssues
          .map((arr) => arr[1].issues_comments_cnt)
          .slice(0, 10);
        const topIssuesClosed = usersSortedByClosedIssues
          .map((arr) => arr[1].issues_closed_cnt)
          .slice(0, 10);

        setLabelsName(topUsers);
        setIssues(topIssues);
        setIssuesComments(topIssuesComments);
        setIssuesClosed(topIssuesClosed);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUsersEvents(JSON_API_URL);
  }, []);

  useLayoutEffect(() => {
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
