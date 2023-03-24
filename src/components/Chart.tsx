import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const chartData = [
  {
    month: "Outubro",
    invoice: 1398,
  },
  {
    month: "Novembro",
    invoice: 9800,
  },
  {
    month: "Dezembro",
    invoice: 3908,
  },
  {
    month: "Janeiro",
    invoice: 4800,
  },
  {
    month: "Fevereiro",
    invoice: 3800,
  },
  {
    month: "Março",
    invoice: 4300,
  },
];

function Chart(): JSX.Element {
  return (
    <LineChart
      id="transactions-chart"
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Line type="monotone" dataKey="invoice" stroke="#820ad1" activeDot={{ r: 8 }} />
    </LineChart>
  );
}

export default Chart;