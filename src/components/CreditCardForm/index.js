import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import { saveReservation } from '../../constants/actions'
import FormField from '../FormField'
import Select from 'react-select'
import { connect } from 'react-redux'
import Cards from 'react-credit-cards'
import InputMask from '../InputMask'
import { creditCardMonths, creditCardYears } from '../../constants/options'
import { CreditCardFormValidationSchema } from '../../constants/formValidationSchemas'
import './index.scss'

const CreditCardForm = ({ reservation, saveReservation, formRef }) => {
  const [isFocusCvc, setIsFocusCvc] = useState(false)
  const [values, setValues] = useState({})

  useEffect(() => {
    setValues({
      card_name: '',
      card_number: '',
      card_date_month: '',
      card_date_year: '',
      card_cvv: '',
      ...reservation,
    })
  }, [])

  const onSubmit = (values) => saveReservation({ ...reservation, ...values })

  return (
    <Formik
      enableReinitialize={true}
      initialValues={values}
      validationSchema={CreditCardFormValidationSchema}
      onSubmit={onSubmit}
      innerRef={formRef}
    >
      {({ values, setFieldValue }) => (
        <Form className="credit-card-form">
          <div className="__card-preview">
            <Cards
              cvc={values.card_cvv || ''}
              expiry={''}
              focused={isFocusCvc ? 'cvc' : ''}
              expiry={values.card_date_month + values.card_date_year || ''}
              name={values.card_name || ''}
              number={values.card_number || ''}
              placeholders={{ name: 'KART ÜZERİNDEKİ İSİM' }}
              locale={{ valid: 'son tarih' }}
            />
          </div>
          <div className="__form">
            <div className="__row">
              <div className="__col">
                <FormField
                  name="card_name"
                  label="Kartın Üzerindeki İsim"
                  type="text"
                />
              </div>
            </div>
            <div className="__row">
              <div className="__col">
                <FormField
                  name="card_number"
                  label="Kartın Numarası"
                  type="text"
                  value={values.card_number}
                  mask={/(\d{4})/}
                  onChange={(val) => setFieldValue('card_number', val)}
                  component={InputMask}
                />
              </div>
            </div>
            <div className="__row">
              <div className="__col">
                <div className="__row">
                  <div className="__col">
                    <FormField
                      name="card_date_month"
                      label="Ay"
                      component={Select}
                      placeholder="Ay"
                      onChange={({ value }) =>
                        setFieldValue('card_date_month', value)
                      }
                      value={creditCardMonths.find(
                        (o) => o.value === values.card_date_month,
                      )}
                      options={creditCardMonths}
                    />
                  </div>
                  <div className="__col">
                    <FormField
                      name="card_date_year"
                      label="Ay"
                      component={Select}
                      value={creditCardYears.find(
                        (o) => o.value === values.card_date_year,
                      )}
                      placeholder="Yıl"
                      onChange={({ value }) =>
                        setFieldValue('card_date_year', value)
                      }
                      options={creditCardYears}
                    />
                  </div>
                </div>
              </div>
              <div className="__col">
                <FormField
                  name="card_cvv"
                  label="CVV"
                  type="text"
                  onFocus={() => setIsFocusCvc(true)}
                  onBlur={() => setIsFocusCvc(false)}
                />
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

const mapStateToProps = ({ reservation }) => ({ reservation: reservation.data })

const mapDispatchToProps = { saveReservation }

export default connect(mapStateToProps, mapDispatchToProps)(CreditCardForm)
