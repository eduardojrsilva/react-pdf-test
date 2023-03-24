import React from "react";
import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";

import { TemplateData } from "../types/entities";
import { getCurrency } from "../utils/currency";
import { getFirstName } from "../utils/name";

const styles = StyleSheet.create({
  woman: {
    width: "30px",
    marginBottom: "15px",
  },
  
  arrow: {
    width: "10px",
  },

  wrapper: {
    left: '100px',
    marginTop: "20px",
    fontSize: '12px',
    lineHeight: '1.8px',
  },

  principalText: {
    color: "#820AD1",
    fontSize: "32px",
    fontFamily: "Montserrat",
    fontWeight: 700,
    lineHeight: '1.125px',
  },

  principalTextContainer: {
    width: '68%',
  },

  accountInformation: {
    marginTop: "60px",
  },

  titleInformation: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: "9px",
  },
  
  valueInformation: {
    fontFamily: 'Montserrat',
    fontWeight: 400
  },

  dueDate: {
    color: "#ff3961",
    textTransform: 'uppercase'
  },

  transactionContainer: {
    marginTop: "9px",
  },

  importantAdvise: {
    fontFamily: 'Montserrat',
    fontSize: "7.5px",
    lineHeight: '1.6px',
    marginTop: "8px",
    color: "#595959",
    width: "80%"
  },

  line: {
    marginTop: "72px",
    width: "40%",
    height: "2.2px",
    backgroundColor: "black",
  },

  minimumPayment: {
    fontSize: "11px",
    marginTop: "10px",
    fontFamily: "Montserrat",
    fontWeight: 700,
    width: "30%",
    lineHeight: 1.2
  },

  minimumPaymentValue: {
    fontSize: "22px",
    fontFamily: "Montserrat",
    fontWeight: 700,
    marginTop: "5px"
  },

  minimumPaymentAdvise: {
    fontFamily: "Montserrat",
    fontWeight: 500,
    lineHeight: '1.4px',
    width: "32%",
    color: "#a8a8a8",
    fontSize: '7px',
    marginTop: "-7px"
  },

  knowMore: {
    color: "#a8a8a8",
    fontFamily: "Montserrat",
    fontWeight: 500,
    textDecoration: 'underline',
    fontSize: '7px',
  }
});

interface TableProps {
  data: TemplateData;
}

function Page1({ data }: TableProps): JSX.Element {
  return (
    <View style={styles.wrapper}>
        <View style={styles.principalTextContainer}>
          <Image style={styles.woman} src="src/images/woman-tipping-hand.png" />
          <Text style={styles.principalText}>
            Olá, {getFirstName(data.name)}!
          </Text>
          <Text style={styles.principalText}>
            Esta é a sua fatura de março, no valor de R$ {getCurrency(data.totalPayable)}
          </Text>
        </View>

        <View style={styles.accountInformation}>
          <View>
            <Text style={styles.titleInformation}>Data do vencimento: <Text style={styles.dueDate}>{data.invoiceDate}</Text></Text>
            <Text style={styles.titleInformation}>Limite total: <Text style={styles.valueInformation}>R$ {getCurrency(data.limit.totalLimit)}</Text></Text>
            <Text style={{display: 'flex', fontSize: "10px"}}>
              <Image style={styles.arrow} src="src/images/arrow-down-right.png" />
              <Text style={styles.titleInformation}>Limite aprovado no cartão de crédito: <Text style={styles.valueInformation}>R$ {getCurrency(data.limit.limitApprovedOnCreditCard)}</Text></Text>
            </Text>

            <Text style={{display: 'flex', fontSize: "10px"}}>
              <Image style={styles.arrow} src="src/images/arrow-down-right.png" />
              <Text style={styles.titleInformation}>Limite adicional para pagar boletos e Pix: <Text style={styles.valueInformation}>R$ {getCurrency(data.limit.additionalLimitToPaySlipsAndPix)}</Text></Text>
            </Text>
          </View>

          <View style={styles.transactionContainer}>
            <Text style={styles.titleInformation}>Valor máximo para transações:</Text>
  
            <Text style={styles.titleInformation}>
              <Image style={styles.arrow} src="src/images/arrow-down-right.png" />
              Saque no crédito: 
             <Text style={styles.valueInformation}> R$ {getCurrency(data.maximumValueForTransactions.creditWithdrawal)}</Text>
            </Text>
  
            <Text style={styles.titleInformation}>
              <Image style={styles.arrow} src="src/images/arrow-down-right.png" />
              Pix no crédito: 
              <Text style={styles.valueInformation}> R$ {getCurrency(data.maximumValueForTransactions.pixOnCredit)}</Text>
            </Text>

            <Text style={styles.titleInformation}>
              <Image style={styles.arrow} src="src/images/arrow-down-right.png" />
              Pagamento de boletos no crédito: 
              <Text style={styles.valueInformation}> R$ {getCurrency(data.maximumValueForTransactions.paymentOfBillsOnCredit)}</Text>
            </Text>
          </View>

          <View style={styles.importantAdvise}>
            <Text>
              Importante: As informações de limite são referentes ao período desta fatura. O valor do Limite Adicional não é 
              fixo e pode variar de acordo com as nossas análises, podendo inclusive ser removido.
            </Text>
          </View>
        </View>

        <Text style={styles.line}></Text>
        <Text style={styles.minimumPayment}>Pagamento mínimo <Text style={{ fontFamily: "Montserrat", fontWeight: 400 }}>para não ficar em atraso</Text></Text>

        <Text style={styles.minimumPaymentValue}>R$ {getCurrency(data.minPayment)}</Text>

        <Text style={styles.minimumPaymentAdvise}>
          Ao fazer o pagamento mínimo, o saldo restante vai entrar no rotativo e o valor de
          R$ 0,00 será adicionado à sua próxima fatura, já inclusos R$ 0,00 de juros e IOF.
        </Text>

        <Text style={styles.knowMore}>Saiba mais</Text>
    </View>
  );
}

export default Page1;