import moment from 'moment'
import React from 'react'
import DatePicker from 'react-datepicker'
import FormField from '../FormField'

const DatePickerFields = ({ startDate, endDate, setFieldValue }) => {
  const formattedStartDate =
    startDate && startDate != 'Invalid date' ? new Date(startDate) : new Date()
  const formattedEndDate =
    endDate && endDate != 'Invalid date' ? new Date(endDate) : ''

  const setDateValue = (key, date) =>
    setFieldValue(key, moment(date).format('YYYY-MM-DD'))

  return (
    <>
      <div>
        <FormField
          label="Giriş Tarihi"
          name="start_date"
          component={DatePicker}
          dateFormat="dd/MM/yyyy"
          selected={formattedStartDate}
          onChange={(date) => setDateValue('start_date', date)}
          selectsStart
          startDate={formattedStartDate}
          endDate={formattedEndDate}
        />
      </div>
      <div>
        <FormField
          label="Çıkış Tarihi"
          name="end_date"
          component={DatePicker}
          selected={formattedEndDate}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => setDateValue('end_date', date)}
          selectsEnd
          startDate={formattedStartDate}
          endDate={formattedEndDate}
          minDate={formattedStartDate}
        />
      </div>
    </>
  )
}

export default DatePickerFields
