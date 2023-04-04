import React from "react";
import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";

import Chart from "../components/Chart";

import { TemplateData } from "../types/entities";
import { getCurrency } from "../utils/currency";

import puppeteer from 'puppeteer';
import ReactDOMServer from 'react-dom/server';

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
  },

  chart: {
    padding: '20px 80px 0px 80px',
  }
});

interface TableProps {
  data: TemplateData;
}


function renderToHtml(Component) {
  const element = React.createElement(Component);
  const html = ReactDOMServer.renderToString(element);
  return html;
}

async function captureScreenshot(html, width, height) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(html);
  await page.setViewport({ width, height });

  const buffer = await page.screenshot({ type: 'png' });

  await browser.close();

  return buffer;
}


function Page4({ data }: TableProps): JSX.Element {
  const chartComponent = () => <Chart />;

  const htmlChart = renderToHtml(chartComponent);
  const buffer = async () => await captureScreenshot(htmlChart, 550, 300);
  
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


      <View style={styles.chart}>
        <Image source={buffer}/>
      </View>
    </View>
  );
}

export default Page4;