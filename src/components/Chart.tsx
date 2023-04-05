import React from 'react';

import { LineChart, Line, XAxis, YAxis } from 'recharts';

import { StyleSheet } from "@react-pdf/renderer";
import { getCurrency } from '../utils/currency';

const styles = StyleSheet.create({
  chart: {
    fontFamily: 'Helvetica',
    fontWeight: 700,
    fontSize: '14px',
  },
});

const chartData = [
  {
    month: "Out/22",
    ibovespa: 0,
    top10: 0,
  },
  {
    month: "Nov/22",
    ibovespa: 18,
    top10: 25,
  },
  {
    month: "Dez/22",
    ibovespa: 5,
    top10: 15,
  },
  {
    month: "Jan/23",
    ibovespa: 38,
    top10: 41,
  },
  {
    month: "Fev/23",
    ibovespa: 25,
    top10: 32,
  },
  {
    month: "Mar/23",
    ibovespa: 30,
    top10: 45,
  },
];

const CustomizedAxisTick = (props) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <rect x={-25} y={10} width={65} height={30} rx={15} style={{ fill: "#9804d5" }} />
      <text x={7} y={25} dy={5} textAnchor="middle" fill="#fff" fontFamily="Helvetica">
        {payload.value}
      </text>
    </g>
  );
};

const CustomizedAverageLabel = (props) => {
    const { x, y, average, index, color } = props;
    const isLastPoint = index === chartData.length - 1;

    if (isLastPoint) {
      return (
        <g transform={`translate(${x},${y})`}>
        <rect x={10} y={-15} width={75} height={30} rx={15} style={{ fill: color }} />
        <text x={47} y={0} dy={5} textAnchor="middle" fill="#fff" fontFamily="Helvetica" fontSize={14}>
          +{getCurrency(average)}%
        </text>
      </g>
      );
    }

    return null;
}

function Chart(): JSX.Element {
  return (
    <LineChart
      id="transactions-chart"
      width={580}
      height={300}
      data={chartData}
      margin={{
        top: 5,
        right: 95,
        left: 20,
        bottom: 5,
      }}
      style={styles.chart}
    >

      <XAxis
        dataKey="month"
        height={60}
        stroke="none"
        tick={<CustomizedAxisTick />}
      />

      <YAxis 
        stroke="none" 
        tick={{fill: '#3a3b3a'}}  
        ticks={[0, 20, 40, 60]} 
        tickLine={{
          strokeWidth: 1,
        }}
        tickFormatter={(tick) => {
          const values = {
            0: "00,00%",
            20: "20,00%",
            40: "40,00%",
            60: "60,00%"
          };
          return values[tick];
        }}
      />

      <Line 
        type="linear"
        dataKey="ibovespa"
        stroke="#ba11e8"
        strokeWidth={4}
        dot={false}
        isAnimationActive={false}
        label={<CustomizedAverageLabel color={"#ba11e8"} average={35.90} />}
      />

      <Line 
        type="linear"
        dataKey="top10"
        stroke="#54167c"
        strokeWidth={4}
        dot={false}
        isAnimationActive={false}
        label={<CustomizedAverageLabel color={"#54167c"} average={44.48} />}
      />
    </LineChart>
  );
}

export default Chart;