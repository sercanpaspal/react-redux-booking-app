import React from 'react'
import { Field } from 'formik'
import FieldErrorMessage from '../FieldErrorMessage'
import FieldInfoMessage from '../FieldInfoMessage'
import './index.scss'

const FormField = ({ name, label, infoMessage, ...props }) => {
  return (
    <div className="form-field">
      {label && <label htmlFor={name}>{label}</label>}
      <Field name={name} {...props} />
      <FieldErrorMessage name={name} />
      {infoMessage && <FieldInfoMessage>{infoMessage}</FieldInfoMessage>}
    </div>
  )
}

export default FormField
