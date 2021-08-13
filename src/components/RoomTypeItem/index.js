import React from 'react'
import Price from '../Price'
import './index.scss'

const RoomTypeItem = ({ day, adult, roomType }) => {
  const { title, photo, price } = roomType

  return (
    <div className="room-item">
      <h3>{title}</h3>
      <img src={photo} />
      <footer>
        <div>
          <span>{day} Gün</span>
          <span>{adult} Yetişkin</span>
        </div>
        <span className="__value">
          <Price price={price * adult * day} />
        </span>
      </footer>
    </div>
  )
}

export default RoomTypeItem
