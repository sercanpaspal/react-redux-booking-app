import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Formik, Form } from 'formik'
import moment from 'moment'
import HotelSelectField from '../HotelSelectField'
import DatePickerFields from '../DatePickerFields'
import Button from '../Button'
import Footer from '../Footer'
import FormField from '../FormField'
import { saveHotelSearchForm } from '../../constants/actions'
import { HotelSearchFormValidationSchema } from '../../constants/formValidationSchemas'
import './index.scss'
import ChildField from '../ChildField'

const HotelSearchForm = ({
  hotel: { max_adult_size },
  reservation,
  saveHotelSearchForm,
}) => {
  const [values, setValues] = useState({})

  const onSubmit = (values) => saveHotelSearchForm(values)

  useEffect(() => {
    setValues({
      hotel_id: '',
      start_date: moment().format('YYYY-MM-DD'),
      end_date: '',
      adult: 0,
      child: 0,
      ...reservation,
    })
  }, [])

  return (
    <Formik
      enableReinitialize={true}
      initialValues={values}
      validationSchema={HotelSearchFormValidationSchema({ max_adult_size })}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue }) => {
        return (
          <Form className="hotel-search-form">
            <div className="__inner-content">
              <FormField
                name="hotel_id"
                onChange={(value) => setFieldValue('hotel_id', value)}
                component={HotelSelectField}
              />
              <div className="__fields">
                <DatePickerFields
                  setFieldValue={setFieldValue}
                  startDate={values.start_date}
                  endDate={values.end_date}
                />
                <div>
                  <ChildField setFieldValue={setFieldValue} />
                </div>
                <div>
                  <FormField
                    label="Yetişkin Sayısı"
                    name="adult"
                    type="number"
                  />
                </div>
              </div>
            </div>
            <Footer>
              <Button type="submit">Kaydet ve Devam Et</Button>
            </Footer>
          </Form>
        )
      }}
    </Formik>
  )
}

const mapStateToProps = ({ hotel, reservation }) => ({
  hotel: hotel.data,
  reservation: reservation.data,
})

const mapDispatchToProps = { saveHotelSearchForm }

export default connect(mapStateToProps, mapDispatchToProps)(HotelSearchForm)
