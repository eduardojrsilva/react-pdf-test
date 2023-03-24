import React from "react";
import { Font, StyleSheet, Text, View } from "@react-pdf/renderer";

Font.register({ family: 'Montserrat', fonts: [
  { src: 'https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtZ6Ew-Y3tcoqK5.ttf', fontWeight: 500},
]});

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end'
  },

  text: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '8px',
    color: '#777777'
  },
});

function Footer(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text} render={({ pageNumber, totalPages }) => (
        `${pageNumber} de ${totalPages}`
      )} />
    </View>
  );
}

export default Footer;