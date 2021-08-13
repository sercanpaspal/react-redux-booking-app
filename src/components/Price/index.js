const Price = ({ price, language = 'tr-TR', currency = 'TRY' }) =>
  new Intl.NumberFormat(language, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)

export default Price
