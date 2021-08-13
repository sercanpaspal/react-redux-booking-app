import React from 'react'
import { connect } from 'react-redux'
import DateFormat from '../DateFormat'
import HotelTitle from '../HotelTitle'

import './index.scss'

const ReservationPreview = ({ reservation, hotel }) => {
  const { start_date, end_date, adult, child } = reservation

  const { room_scenic = [], room_type = [] } = hotel

  const roomTypeTitle = room_type.find(
    (s) => s.id == reservation.room_type,
  )?.title

  const roomScenicTitle = room_scenic.find(
    (s) => s.id == reservation.room_scenic,
  )?.title

  return (
    <div className="reservation-preview-list">
      <HotelTitle />
      <ul>
        <li>
          <div>
            <strong>Giriş Tarihi:</strong> <DateFormat date={start_date} />
          </div>
        </li>
        <li>
          <div>
            <strong>Çıkış Tarihi:</strong> <DateFormat date={end_date} />
          </div>
        </li>
        <li>
          <div>
            <strong>Yetişkin:</strong> {adult}
          </div>
        </li>
        <li>
          <div>
            <strong>Çocuk:</strong> {child}
          </div>
        </li>
        <li>
          <div>
            <strong>Oda Tipi:</strong> {roomTypeTitle}
          </div>
        </li>
        <li>
          <div>
            <strong>Manzara:</strong> {roomScenicTitle}
          </div>
        </li>
      </ul>
    </div>
  )
}

const mapStateToProps = ({ reservation, hotel }) => ({
  reservation: reservation.data,
  hotel: hotel.data,
})

export default connect(mapStateToProps)(ReservationPreview)
