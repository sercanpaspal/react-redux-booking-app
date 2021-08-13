import React from 'react'
import { ErrorMessage } from 'formik'
import './index.scss'

const FieldErrorMessage = ({ name }) => (
  <ErrorMessage name={name} component="div" className="field-error-message" />
)

export default FieldErrorMessage
