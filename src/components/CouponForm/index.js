import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import FormField from '../FormField'
import Button from '../Button'
import { connect } from 'react-redux'
import { CouponFormValidationSchema } from '../../constants/formValidationSchemas'
import { getCoupon } from '../../constants/actions'
import './index.scss'

const CouponForm = ({ reservation, coupon, getCoupon }) => {
  const [values, setValues] = useState({})

  const { loading, error } = coupon

  const { coupon_code } = reservation

  useState(() => {
    setValues({ coupon_code })
  }, [coupon_code])

  const onSubmit = ({ coupon_code }) => getCoupon(coupon_code)

  return (
    <Formik
      initialValues={values}
      enableReinitialize={true}
      validationSchema={CouponFormValidationSchema}
      onSubmit={onSubmit}
    >
      <Form className="coupon-form">
        <div>
          <FormField
            disabled={loading}
            name="coupon_code"
            label="Kupon Kodu"
            type="text"
          />
          <Button type="submit">Uygula</Button>
        </div>
        {error && <small>{error.message}</small>}
      </Form>
    </Formik>
  )
}

const mapStateToProps = ({ coupon, reservation }) => ({
  coupon: coupon,
  reservation: reservation.data,
})

const mapDispatchToProps = { getCoupon }

export default connect(mapStateToProps, mapDispatchToProps)(CouponForm)
