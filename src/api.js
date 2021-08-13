export const dayBetweenTwoDate = (dateOne, dateTwo) =>
  Math.ceil(
    Math.abs(new Date(dateOne) - new Date(dateTwo)) / (1000 * 60 * 60 * 24),
  )
