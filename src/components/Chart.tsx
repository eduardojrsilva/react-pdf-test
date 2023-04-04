import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

import { StyleSheet } from "@react-pdf/renderer";

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
    invoice: 1398,
  },
  {
    month: "Nov/22",
    invoice: 2800,
  },
  {
    month: "Dez/22",
    invoice: 908,
  },
  {
    month: "Jan/23",
    invoice: 4800,
  },
  {
    month: "Fev/23",
    invoice: 3800,
  },
  {
    month: "Mar/23",
    invoice: 4300,
  },
];

const CustomizedAxisTick = (props) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <rect x={-25} y={10} width={65} height={30} rx={15} style={{ fill: "#820ad1" }} />
      <text x={7} y={25} dy={5} textAnchor="middle" fill="#fff" fontFamily="Helvetica">
        {payload.value}
      </text>
    </g>
  );
};

function Chart(): JSX.Element {
  return (
    <LineChart
      id="transactions-chart"
      width={550}
      height={300}
      data={chartData}
      margin={{
        top: 5,
        right: 50,
        left: 20,
        bottom: 5,
      }}
      style={styles.chart}
    >
      <CartesianGrid strokeDasharray="2 4" stroke='black' strokeWidth={1}/>

      <XAxis
        dataKey="month"
        height={60}
        stroke="none"
        tick={<CustomizedAxisTick />}
      />

      <YAxis 
        stroke="none" 
        tick={{fill: '#111'}}  
        tickLine={{
          strokeWidth: 1,
        }}
      />
      <Line 
        type="linear"
        dataKey="invoice"
        stroke="#820ad1"
        strokeWidth={4}
        dot={false}
        isAnimationActive={false}
      />
    </LineChart>
  );
}

export default Chart;