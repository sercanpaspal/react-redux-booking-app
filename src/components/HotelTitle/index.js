import React from 'react'
import { connect } from 'react-redux'
import './index.scss'

const HotelTitle = ({ hotel: { city, id }, hotelList }) => {
  const hotelName = hotelList.find((h) => h.id == id)?.hotel_name

  return (
    <h2 className="hotel-title">
      {hotelName} <span>({city})</span>
    </h2>
  )
}

const mapStateToProps = ({ hotel, hotelList }) => ({
  hotel: hotel.data,
  hotelList: hotelList.data,
})

export default connect(mapStateToProps)(HotelTitle)
