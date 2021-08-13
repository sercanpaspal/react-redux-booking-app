import React from 'react'
import { connect } from 'react-redux'
import HotelTitle from '../../components/HotelTitle'
import DateFormat from '../../components/DateFormat'
import HotelRoomForm from '../../components/HotelRoomForm'
import './index.scss'

const HotelPage = ({ reservation }) => {
  const { start_date, end_date, adult, child } = reservation

  return (
    <div className="hotel-page">
      <div className="__top">
        <HotelTitle />
        <ul>
          <li>
            <strong>Giriş Tarihi:</strong> <DateFormat date={start_date} />
          </li>
          <li>
            <strong>Çıkış Tarihi:</strong> <DateFormat date={end_date} />
          </li>
          <li>
            <strong>Yetişkin:</strong> {adult}
          </li>
          <li>
            <strong>Çocuk:</strong> {child}
          </li>
        </ul>
      </div>
      <HotelRoomForm />
    </div>
  )
}

const mapStateToProps = ({ reservation }) => ({
  reservation: reservation.data,
})

export default connect(mapStateToProps)(HotelPage)
