import { FC } from 'react';
import Section from '../../../../layouts/Section';

import {
  PieChart,
  DoughnutChart,
  RadarChart,
  PolarAreaChart,
} from './components';

// TODO: change any
interface ChartsProps {
  pieChartData: any;
  polarChartData: any;
}

const Charts: FC<ChartsProps> = ({ pieChartData, polarChartData }) => {
  return (
    <Section>
      <div className="flex items-center p-6 mt-3 overflow-hidden bg-white rounded-lg flex-nowrap card justify-evenly">
        <PieChart pieChartData={pieChartData} />
        <h2 className="mb-auto text-lg text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 w-max">
          Top 10 Stack | Top 10 Activists
        </h2>
        <DoughnutChart doughnutChartData={pieChartData} />
      </div>
      <div className="flex items-center p-6 mt-3 overflow-hidden bg-white rounded-lg flex-nowrap card justify-evenly">
        <RadarChart />
        <h2 className="mb-auto text-lg text-transparent w-max bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 ">
          Top Contributors
        </h2>
        <PolarAreaChart polarChartData={polarChartData} />
      </div>
      {/* // TODO: ComboChart */}
      {/* <div className="flex items-center p-6 mt-3 overflow-hidden bg-white rounded-lg flex-nowrap card justify-evenly">
        <ComboChart />
      </div> */}
    </Section>
  );
};

export default Charts;
