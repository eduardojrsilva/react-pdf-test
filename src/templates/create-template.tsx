import React from "react";
import ReactPDF, {
  Document,
  Font,
  Page,
  StyleSheet,
  View,
} from "@react-pdf/renderer";

import Footer from "../components/Footer";
import Header from "../components/Header";

import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";

import { TemplateData } from "../types/entities";

Font.register({ family: 'Montserrat', fonts: [
  { src: 'https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Ew-Y3tcoqK5.ttf'},
  { src: 'https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtZ6Ew-Y3tcoqK5.ttf', fontWeight: 500},
  { src: 'http://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCu170w-Y3tcoqK5.ttf', fontWeight: 600},
  { src: 'https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM70w-Y3tcoqK5.ttf', fontWeight: 700},

]});

interface PDFProps {
  data: TemplateData;
}

const styles = StyleSheet.create({
  wrapper: {
    padding: '40px',
    paddingBottom: '20px'
  },

  page: {
    marginTop: '30px',
    height: '85vh'
  }
});

const PDF = ({ data }: PDFProps) => {
  const headerInfo = {
    name: data.name,
    invoice: data.invoiceDate,
    emissionAndSending: data.emissionAndSending
  };

  return (
    <Document>
      <Page style={styles.wrapper}>
        <View fixed>
          <Header info={headerInfo} />
        </View>

        <View style={styles.page}>
          <Page1 data={data} />
        </View>

        <View style={styles.page}>
          <Page2 />
        </View>

        <View style={styles.page}>
          <Page3 data={data} />
        </View>

        <View style={styles.page}>
          <Page4 data={data} />
        </View>

        <View fixed style={{ alignSelf: 'flex-end'}}>
          <Footer/>
        </View>
      </Page>
    </Document>
  );
};

export default async (data: TemplateData) => {
  return await ReactPDF.renderToStream(<PDF {...{ data }} />);
};