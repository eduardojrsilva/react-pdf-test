export function getCurrency(currency: number): string {
  return currency.toFixed(2).replace('.', ',');
}