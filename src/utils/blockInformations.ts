export interface BlockInformations {
  id: string;
  title: string;
  dashColor: string;
  alertText: string;
  blockPhrase?: string;
  blockPhrase4?:{part1: string, part2: string, part3: string};
  howToDoPhrase?: string;
}

export const block1: BlockInformations = {
  id: '1',
  title: '1. Pagar o valor total da fatura',
  dashColor: '#00743f',
  alertText: 'Essa é sempre a melhor escolha',
  blockPhrase: 'Com o pagamento total, você quita o saldo da sua fatura, libera o limite de crédito do seu cartão e não paga juros ou multa.',
  howToDoPhrase: 'você pode pagar sua fatura direto no aplicativo do Nubank com o saldo da sua conta e ter seu limite liberado em até 30 minutos ou usar o boleto para pagar na instituição que você preferir, levando até 3 dias para compensar e liberar seu limite.',
}

export const block2: BlockInformations = {
  id: '2',
  title: '2. Parcelar a fatura',
  dashColor: '#ffa239',
  alertText: 'Para quem quer pagar juros menores e evitar uma bola de neve',
  blockPhrase: 'Uma possibilidade é fazer o pagamento mínimo ou pagar um valor entre o mínimo e total e parcelar o restante da sua fatura. Assim, você consegue se programar para um pagamento mensal que cabe no seu bolso, com juros fixos e menores que os do rotativo.',
  howToDoPhrase: 'para parcelar, é só clicar em "parcelar fatura" na área de cartão de crédito dentro do aplicativo e então escolher seu valor de entrada e número de parcelas.',
}

export const block3: BlockInformations = {
  id: '3',
  title: '3. Pagar o mínimo e entrar no rotativo',
  dashColor: '#ffa239',
  alertText: 'Para quem está precisando de mais uns dias para fazer o pagamento total',
  blockPhrase: 'Se esse é o seu caso, você pode pagar o valor mínimo ou um valor entre o mínimo e o total e, assim, evitar a multa de atraso e entrar no rotativo por alguns dias. Se essa for sua decisão, é importante pensar que os juros do rotativo são adicionados ao seu valor em aberto diariamente e, além disso, quanto maior o valor pago, menos encargos você terá',
  howToDoPhrase: 'basta pagar um valor igual ou maior que o pagamento mínimo indicado na primeira página da sua fatura.',
}

export const block4: BlockInformations = {
  id: '4',
  title: '4. Deixar o pagamento da fatura atrasar',
  dashColor: '#d92427',
  alertText: 'Nunca é uma boa opção',
  blockPhrase4: {
    part1: 'Ao pagar um',
    part2: ' valor menor que o pagamento mínimo',
    part3: ' da sua fatura ou não pagar valor algum e deixar a fatura em aberto atrasar, além de todos os encargos como juros, IOF e multa, você ainda corre o risco de ter seu cartão bloqueado e seu CPF negativado.',
  },
}
