import React, { ReactNode, useCallback } from "react";
import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  
  logo: {
    width: '50px',
    height: '25px'
  },

  infoWrapper: {
    justifyContent: 'space-between'
  },

  text: {
    textTransform: 'uppercase',
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: '7px'
  },
  
  date: {
    textTransform: 'uppercase',
    fontFamily: 'Montserrat',
    fontSize: '7px'
  }
});

interface HeaderProps {
  info: {
    name: string;
    invoice: string;
    emissionAndSending: string;
  }; 
}

function Header({ info } : HeaderProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Image src="src/images/nu.png" style={styles.logo} />

      <View style={styles.infoWrapper}>
        <Text style={styles.text} render={({ pageNumber }) => (
          pageNumber !== 1 && info.name
        )} />

        <View style={{ flexDirection: 'row'}}>
          <Text style={styles.text} render={({ pageNumber }) => (pageNumber !== 1 && 'Fatura ')} />
          <Text style={styles.date} render={({ pageNumber }) => (pageNumber !== 1 && info.invoice)} />
          <Text style={styles.text} render={({ pageNumber }) => (pageNumber !== 1 && ' Emissão e envio ')} />
          <Text style={styles.date} render={({ pageNumber }) => (pageNumber !== 1 && info.emissionAndSending)} />
        </View>
      </View>
    </View>
  );
}

export default Header;