import React from "react";
import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";

import { block1, block2, block3, block4, BlockInformations } from "../utils/blockInformations";

const styles = StyleSheet.create({
  wrapper: {
    padding: '10px',
    marginTop: "-20px"
  },
  
  content: {
    width: '68%',
    fontSize: '9px',
    left: '115px',
    lineHeight: '1.6px',
    fontFamily: "Montserrat",
    fontWeight: 500
  },

  principalTitle: {
    fontSize: '15px',
    lineHeight: '1px',
    fontFamily: "Montserrat",
    fontWeight: 600,

    width: "80%",
  },

  blockWrapper: {
    marginTop: "20px",
  },

  blockTitle: {
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: '12px',
  },

  alertTextContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    marginLeft: "2px",
    marginTop: "4px",
  },

  dash: {
    width: "1.5px",
    height: "16px",
  },

  alertText: {
    marginLeft: "6px",
    marginTop: "2.5px",
  },

  BlockPhrase: {
    margin: "10px 0px",
  },

  BlockPhrase4: {
    margin: "10px 0px",
    display: "flex",
    flexDirection: "row",
  },

  howToDo: {
    display: "flex",
    flexDirection: "row",
    alignContent: "flex-start",
    paddingLeft: "10px",
    gap: "5px",
  },

  howToDoPhrase: {
    marginTop: "4px",
    fontSize: "8.5px",
  },

  arrow: {
    width: "15px",
    height: "15px",
  },

  strong: {
    fontFamily: "Montserrat",
    fontWeight: 700
  },
});

function BlockInformation(data: BlockInformations): JSX.Element {
  return (
    <>
      <Text style={styles.blockTitle}>{data.title}</Text>
      <View style={styles.alertTextContainer}>
        <Text style={[styles.dash, {backgroundColor: data.dashColor}]}/>
        {data.id === '1' || data.id === '4' ? <Text style={[styles.alertText, {color: data.dashColor}]}>{data.alertText}</Text> : <Text style={styles.alertText}>{data.alertText}</Text>}
      </View>

      {data.id === '4' 
      ? 
        <Text style={styles.BlockPhrase4}>
          <Text>{data.blockPhrase4.part1}</Text>
          <Text style={styles.strong}>{data.blockPhrase4.part2}</Text>
          <Text>{data.blockPhrase4.part3}</Text>
        </Text>

      : <Text style={styles.BlockPhrase}>{data.blockPhrase as string}</Text>}

      {data.howToDoPhrase && (
      <View style={styles.howToDo}>
        <Image style={styles.arrow} src="src/images/arrow-down-right.png" />
        <Text style={styles.howToDoPhrase}><Text style={styles.strong}>Como fazer: </Text>{data.howToDoPhrase}</Text>
      </View>
      )}
    </>
  )
};

function Page2(): JSX.Element {
  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <View>
          <Text style={styles.principalTitle}>Confira as opções de pagamento e entenda o que cabe no seu bolso.</Text>
        </View>

        <View style={styles.blockWrapper}>
          <BlockInformation {...block1} />
        </View>

        <View style={styles.blockWrapper}>
          <BlockInformation {...block2} />
        </View>

        <View style={styles.blockWrapper}>
          <BlockInformation {...block3} />
        </View>

        <View style={styles.blockWrapper}>
          <BlockInformation {...block4} />
        </View>
      </View>
    </View>
  );
}

export default Page2;