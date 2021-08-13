import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import { getHotelList, getHotelDetail } from '../../constants/actions'
import { findOption, hotels } from '../../constants/options'

const HotelSelectField = ({
  hotelList: { data = [], loading },
  getHotelList,
  hotel,
  getHotelDetail,
  onChange,
  field: { value },
}) => {
  useEffect(() => {
    if (value && value != hotel.id) getHotelDetail(value)
  }, [value])

  useEffect(() => {
    if (data.length === 0) getHotelList()
  }, [getHotelList])

  const options = hotels(data)

  return (
    <Select
      cacheOptions
      isLoading={loading}
      isDisabled={loading}
      options={options}
      placeholder="Rezervasyon yapmak istediğiniz oteli seçiniz."
      onChange={(option) => onChange(option.value)}
      value={findOption(value, options)}
    />
  )
}

const mapStateToProps = ({ hotel, hotelList }) => ({
  hotelList,
  hotel: hotel.data,
})

const mapDispatchToProps = { getHotelList, getHotelDetail }

export default connect(mapStateToProps, mapDispatchToProps)(HotelSelectField)
