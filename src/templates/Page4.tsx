import React from "react";
import { Circle, G, Image, Line, StyleSheet, Svg, Text, Tspan, View } from "@react-pdf/renderer";
import { renderToStaticMarkup } from 'react-dom/server';

import Chart from "../components/Chart";

import { TemplateData } from "../types/entities";
import { getCurrency } from "../utils/currency";
import { SVGToComponent } from "../utils/svg";

const styles = StyleSheet.create({
  rowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px',
  },

  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    textTransform: 'uppercase'
  },
  
  title: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: '8px',
    gap: '10px'
  },

  subtitle: {
    fontFamily: 'Montserrat',
    fontSize: '6px',
    color: '#3d3838',
    fontWeight: 400
  },

  titleLine: {
    margin: '10px 0',
    backgroundColor: '#000',
    padding: '1.5px'
  },

  list: {
    marginLeft: '60px',
  },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '8px',
    padding: '5px',
  },
  
  evenRow: {
    backgroundColor: '#fafafa'
  },

  date: {
    fontSize: '6px',
    color: '#3d3838',
    fontWeight: 400,
    textTransform: 'uppercase'
  },

  icon: {
    width: '8px',
    height: '8px'
  }
});

interface TableProps {
  data: TemplateData;
}

function Page4({ data }: TableProps): JSX.Element {
  const chartString = renderToStaticMarkup(<Chart />);

  const convertedSvg = SVGToComponent('<g><g class="recharts-cartesian-grid"><g class="recharts-cartesian-grid-horizontal"><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="80" y="5" width="390" height="260" offset="[object Object]" x1="80" y1="265" x2="470" y2="265"></line><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="80" y="5" width="390" height="260" offset="[object Object]" x1="80" y1="200" x2="470" y2="200"></line><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="80" y="5" width="390" height="260" offset="[object Object]" x1="80" y1="135" x2="470" y2="135"></line><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="80" y="5" width="390" height="260" offset="[object Object]" x1="80" y1="70" x2="470" y2="70"></line><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="80" y="5" width="390" height="260" offset="[object Object]" x1="80" y1="5" x2="470" y2="5"></line></g><g class="recharts-cartesian-grid-vertical"><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="80" y="5" width="390" height="260" offset="[object Object]" x1="80" y1="5" x2="80" y2="265"></line><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="80" y="5" width="390" height="260" offset="[object Object]" x1="158" y1="5" x2="158" y2="265"></line><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="80" y="5" width="390" height="260" offset="[object Object]" x1="236" y1="5" x2="236" y2="265"></line><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="80" y="5" width="390" height="260" offset="[object Object]" x1="314" y1="5" x2="314" y2="265"></line><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="80" y="5" width="390" height="260" offset="[object Object]" x1="392" y1="5" x2="392" y2="265"></line><line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="80" y="5" width="390" height="260" offset="[object Object]" x1="470" y1="5" x2="470" y2="265"></line></g></g><g class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis"><line orientation="bottom" width="390" height="30" x="80" y="265" class="recharts-cartesian-axis-line" stroke="#666" fill="none" x1="80" y1="265" x2="470" y2="265"></line><g class="recharts-cartesian-axis-ticks"><g class="recharts-layer recharts-cartesian-axis-tick"><line orientation="bottom" width="390" height="30" x="80" y="265" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="80" y1="271" x2="80" y2="265"></line><text orientation="bottom" width="390" height="30" x="80" y="273" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="80" dy="0.71em">Outubro</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line orientation="bottom" width="390" height="30" x="80" y="265" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="158" y1="271" x2="158" y2="265"></line><text orientation="bottom" width="390" height="30" x="158" y="273" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="158" dy="0.71em">Novembro</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line orientation="bottom" width="390" height="30" x="80" y="265" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="236" y1="271" x2="236" y2="265"></line><text orientation="bottom" width="390" height="30" x="236" y="273" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="236" dy="0.71em">Dezembro</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line orientation="bottom" width="390" height="30" x="80" y="265" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="314" y1="271" x2="314" y2="265"></line><text orientation="bottom" width="390" height="30" x="314" y="273" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="314" dy="0.71em">Janeiro</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line orientation="bottom" width="390" height="30" x="80" y="265" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="392" y1="271" x2="392" y2="265"></line><text orientation="bottom" width="390" height="30" x="392" y="273" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="392" dy="0.71em">Fevereiro</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line orientation="bottom" width="390" height="30" x="80" y="265" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="470" y1="271" x2="470" y2="265"></line><text orientation="bottom" width="390" height="30" x="470" y="273" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="470" dy="0.71em">Março</tspan></text></g></g></g><g class="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis"><line orientation="left" width="60" height="260" x="20" y="5" class="recharts-cartesian-axis-line" stroke="#666" fill="none" x1="80" y1="5" x2="80" y2="265"></line><g class="recharts-cartesian-axis-ticks"><g class="recharts-layer recharts-cartesian-axis-tick"><line orientation="left" width="60" height="260" x="20" y="5" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="74" y1="265" x2="80" y2="265"></line><text orientation="left" width="60" height="260" x="72" y="265" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="72" dy="0.355em">0</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line orientation="left" width="60" height="260" x="20" y="5" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="74" y1="200" x2="80" y2="200"></line><text orientation="left" width="60" height="260" x="72" y="200" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="72" dy="0.355em">2500</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line orientation="left" width="60" height="260" x="20" y="5" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="74" y1="135" x2="80" y2="135"></line><text orientation="left" width="60" height="260" x="72" y="135" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="72" dy="0.355em">5000</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line orientation="left" width="60" height="260" x="20" y="5" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="74" y1="70" x2="80" y2="70"></line><text orientation="left" width="60" height="260" x="72" y="70" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="72" dy="0.355em">7500</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line orientation="left" width="60" height="260" x="20" y="5" class="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="74" y1="5" x2="80" y2="5"></line><text orientation="left" width="60" height="260" x="72" y="5" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="72" dy="0.355em">10000</tspan></text></g></g></g><g class="recharts-layer recharts-line"><path stroke="#820ad1" stroke-width="1" fill="none" width="390" height="260" class="recharts-curve recharts-line-curve" d="M80,228.65200000000002C106,119.42600000000003,132,10.200000000000005,158,10.200000000000005C184,10.200000000000005,210,163.392,236,163.392C262,163.392,288,140.20000000000002,314,140.20000000000002C340,140.20000000000002,366,166.20000000000002,392,166.20000000000002C418,166.20000000000002,444,159.70000000000002,470,153.20000000000002"></path><g class="recharts-layer"></g><g class="recharts-layer recharts-line-dots" role="img"><circle r="3" stroke="#820ad1" stroke-width="1" fill="#fff" width="390" height="260" cx="80" cy="228.65200000000002" class="recharts-dot recharts-line-dot"></circle><circle r="3" stroke="#820ad1" stroke-width="1" fill="#fff" width="390" height="260" cx="158" cy="10.200000000000005" class="recharts-dot recharts-line-dot"></circle><circle r="3" stroke="#820ad1" stroke-width="1" fill="#fff" width="390" height="260" cx="236" cy="163.392" class="recharts-dot recharts-line-dot"></circle><circle r="3" stroke="#820ad1" stroke-width="1" fill="#fff" width="390" height="260" cx="314" cy="140.20000000000002" class="recharts-dot recharts-line-dot"></circle><circle r="3" stroke="#820ad1" stroke-width="1" fill="#fff" width="390" height="260" cx="392" cy="166.20000000000002" class="recharts-dot recharts-line-dot"></circle><circle r="3" stroke="#820ad1" stroke-width="1" fill="#fff" width="390" height="260" cx="470" cy="153.20000000000002" class="recharts-dot recharts-line-dot"></circle></g></g></g>');
  
  console.log(convertedSvg);
  
  return (
    <View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Transações <Text style={styles.subtitle}>{`De ${data.interval}`}</Text></Text>

        <Text style={styles.subtitle}>Valores em R$</Text>
      </View>

      <View style={styles.titleLine} />

      <View style={styles.list}>
        {data.history.map(({ date, type, name, price }, index) => (
          <View key={index} style={[styles.item, (index + 1) % 2 === 0 && styles.evenRow]}>
            <View style={styles.rowAlignCenter}>
              <Text style={styles.date}>{date}</Text>

              {type === 'payment'
                ? <Image src="src/images/green-heart.png" style={styles.icon} />
                : <Image src="src/images/tools.jpg" style={styles.icon} />
              }

              <Text>{name}</Text>
            </View>

            <Text style={type === 'payment' && { color: '#8bcd41' }}>{getCurrency(price)}</Text>
          </View>
        ))}
      </View>

      <View style={[styles.titleWrapper, { marginTop: "30px" }]}>
        <Text style={styles.title}>Comparativo Mensal</Text>

        <Text style={styles.subtitle}>6 meses</Text>
      </View>

      <View style={styles.titleLine} />

      <Svg width="500" height="300" viewBox="0 0 500 300">{convertedSvg}</Svg>
      <G   />
    </View>
  );
}

export default Page4;