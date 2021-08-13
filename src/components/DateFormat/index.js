import moment from 'moment'

const DateFormat = ({ date, format = 'DD.MM.YYYY' }) =>
  moment(date).format(format)

export default DateFormat
