const intl = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
})

export const priceConverter = (price) => intl.format(price)

export function useCurrency(price) {
  return priceConverter(price)
}
