import React from 'react';
import { Global } from 'recharts';

import htmlSvgToPdfSvg from './imageFromSvg';


export const ChartSvg = ({ children, width, height }) => {
  return chartToPdfSvg(children, width, height);
};

const chartToPdfSvg = (children, width, height) => {
  Global.set('isSsr', true);
  const component = htmlSvgToPdfSvg(children);
  Global.set('isSsr', false);

  const result = React.cloneElement(component, { width, height });
  return result;
};

export default ChartSvg;