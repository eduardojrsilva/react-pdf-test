import React from "react";
import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";

import { TemplateData } from "../types/entities";
import { getCurrency } from "../utils/currency";

const styles = StyleSheet.create({
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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
    fontSize: '8px'
  },

  subtitle: {
    fontFamily: 'Montserrat',
    fontSize: '6px',
    color: '#3d3838'
  },

  titleLine: {
    margin: '10px 0',
    backgroundColor: '#000',
    padding: '1.5px'
  },

  content: {
    marginLeft: '100px'
  },

  invoiceWrapper: {
    gap: '10px'
  },

  specialText: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '8px'
  },

  textWrapper: {
    gap: '10px',
    margin: '8px 80px 30px 0'
  },

  text: {
    fontFamily: 'Montserrat',
    fontSize: '7.5px',
    lineHeight: '1.6'
  },

  totalPrice: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: '16px',
    color: '#820ad1',
    marginTop: '16px',
    marginBottom: '4px'
  },

  divisor: {
    margin: '15px 0',
    backgroundColor: '#000',
    padding: '0.25px'
  },
  
  paymentBold: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: '8px'
  },

  footerInfoWrapper: {
    flexDirection: 'row',
    gap: '80px',
    fontFamily: 'Montserrat',
    fontSize: '6px',
    lineHeight: 1.6
  },

  footerDivisor: {
    margin: '10px 0 6px 0',
    backgroundColor: '#3d3838',
    padding: '0.05px'
  },

  icon: {
    width: '8px',
    height: '8px'
  }
});

interface TableProps {
  data: TemplateData;
}

function Page3({ data }: TableProps): JSX.Element {
  return (
    <View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Resumo da Fatura Atual</Text>

        <Text style={styles.subtitle}>Valores em R$</Text>
      </View>

      <View style={styles.titleLine} />

      <View style={styles.content}>
        <View style={[styles.invoiceWrapper, { marginTop: '10px' }]}>
          <View style={styles.rowSpaceBetween}>
            <Text style={styles.specialText}>Fatura anterior</Text>
            <Text style={[styles.specialText, { color: '#8bcd41' }]}>{getCurrency(data.previousInvoice)}</Text>
          </View>

          <View style={styles.rowSpaceBetween}>
            <Text style={styles.specialText}>Pagamento recebido</Text>

            <View style={{ flexDirection: 'row', gap: '5px' }}>
              <Image src="src/images/green-heart.png" style={styles.icon} />
              <Text style={[styles.specialText, { color: '#8bcd41' }]}>{getCurrency(data.paymentReceived)}</Text>
            </View>
          </View>

          <View style={styles.rowSpaceBetween}>
            <Text style={styles.specialText}>{`Total de compras, ${data.interval}`}</Text>
            
            

              <Text style={styles.specialText}>{getCurrency(data.totalPurchases)}</Text>
          </View>
        </View>

        <View style={[styles.rowSpaceBetween, styles.totalPrice]}>
          <Text>Total a pagar</Text>

          <Text>{`R$ ${getCurrency(data.totalPayable)}`}</Text>
        </View>

        <View style={styles.divisor} />

        <View>
          <View style={styles.rowSpaceBetween}>
            <Text style={styles.specialText}>
              <Text style={styles.paymentBold}>Pagamento mínimo</Text> para não ficar em atraso
            </Text>

            <Text style={styles.paymentBold}>{`R$ ${getCurrency(data.minPayment)}`}</Text>
          </View>

          <View style={styles.textWrapper}>
            <Text style={styles.text}>
              Composição do pagamento mínimo: 15% do valor total das compras em aberto da sua
              fatura atual + 15% do valor total das compras em aberto do mes anterior + 100% de outros
              lançamentos (juros e mora, multa, IOF, saques e parcelamentos de fatura).
            </Text>

            <Text style={styles.text}>
              O Nubank declara, nos termos da Lei 12.007/2009, que os débitos referentes ao cartão de
              crédito no ano de 2022 foram devidamente quitados. Esta declaração substitui os
              comprovantes dos pagamentos dos anos anteriores, assim como, aqueles pagamentos
              realizados até a data de vencimento da fatura de dezembro/2022.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Próximas Faturas</Text>
      </View>

      <View style={styles.titleLine} />

      <View style={[styles.content, { marginBottom: '100px' }]}>
        <View style={styles.invoiceWrapper}>
          <View style={styles.rowSpaceBetween}>
            <Text style={styles.specialText}>Fechamento da próxima fatura</Text>
            <Text style={styles.specialText}>{data.nextInvoice}</Text>
          </View>

          <View style={styles.rowSpaceBetween}>
            <Text style={styles.specialText}>Saldo em aberto da próxima fatura</Text>
            <Text style={styles.specialText}>{`R$ ${getCurrency(data.outstandingBalance)}`}</Text>
          </View>

          <View style={styles.rowSpaceBetween}>
            <Text style={styles.specialText}>Saldo em aberto total</Text>
            <Text style={styles.specialText}>{`R$ ${getCurrency(data.totalOutstandingBalance)}`}</Text>
          </View>
        </View>
      </View>

      <View style={styles.divisor} />

      <View style={styles.footerInfoWrapper}>
        <View>
          <Text style={{ fontWeight: 700 }}>Nu Pagamentos S.A. - Instituição de Pagamento</Text>

          <View style={{ marginTop: '10px', marginBottom: '50px' }}>
            <Text>CNPJ 18.236.120/0001-58</Text>
            <Text>Rua Capote Valente, 39 - Pinheiros</Text>
            <Text>São Paulo/SP - 05409-000</Text>
          </View>

          <View>
            <Text style={{ fontWeight: 700 }}>SAC 0800 591 2117</Text>
            <Text>Ouvidoria 0800 887 0463</Text>
          </View>
        </View>

        <View style={{ width: '100%' }}>
          <Text style={{ fontWeight: 700 }}>Encargos e Custo Efetivo Total (CET) válidos para o próximo período</Text>

          <View style={styles.footerDivisor} />

          <View style={{ gap: '10px' }}>
            <Text style={{ maxWidth: '280px' }}>
              <Text style={{ fontWeight: 700 }}>Saque Nacional:</Text> juros de 9,75% a.m + IOF de 0,38% + IOF diário até o vencimento de 0,0082%
              e CET máximo do empréstimo de 289,42% a.a
            </Text>

            <Text style={{ maxWidth: '290px' }}>
              <Text style={{ fontWeight: 700 }}>Saque Internacional:</Text> juros de 9,75% a.m + IOF de 0,38% + IOF diário até o vencimento de 0,0082%
              + IOF de câmbio de 6,38% e CET máximo do empréstimo de 289,42% a.a
            </Text>
          </View>

          <View style={styles.footerDivisor} />

          <Text><Text style={{ fontWeight: 700 }}>Juros de rotativo:</Text> 16,1% am <Text style={{ fontWeight: 700 }}>CET:</Text> 503,15% aa</Text>
          <Text><Text style={{ fontWeight: 700 }}>Juros de parcelamento:</Text> consulte o app na contratação</Text>
          <Text><Text style={{ fontWeight: 700 }}>Juros e mora em caso de atraso:</Text> 17,1% am + 2% multa CET: 570,17% aa</Text>
        </View>
      </View>
    </View>
  );
}

export default Page3;