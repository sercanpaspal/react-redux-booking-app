export const creditCardMonths = [...Array(12).keys()]
  .map((m) => `${m + 1}`.padStart(2, '0'))
  .map((value) => ({
    value,
    label: value,
  }))

export const creditCardYears = [...Array(20).keys()]
  .map((y) => new Date().getFullYear() + y)
  .map((value) => ({
    value,
    label: value,
  }))

export const hotels = (list = []) =>
  list.map(({ id, hotel_name }) => ({
    label: hotel_name,
    value: id,
  }))

export const findOption = (value, options) =>
  options.find((o) => o.value === value) || null
