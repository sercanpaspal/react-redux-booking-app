import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import FormField from '../FormField'

const ChildField = ({ hotel: { child_status }, setFieldValue }) => {
  const childStatus = typeof child_status === 'boolean' ? child_status : true

  useEffect(() => {
    setFieldValue('child', 0)
  }, [childStatus])

  return (
    <FormField
      label="Çocuk Sayısı"
      name="child"
      type="number"
      disabled={!childStatus}
      infoMessage={!childStatus && 'Çocuk ziyaretçi kabul edilmiyor!'}
    />
  )
}

const mapStateTopProps = ({ hotel }) => ({ hotel: hotel.data })

export default connect(mapStateTopProps)(ChildField)
