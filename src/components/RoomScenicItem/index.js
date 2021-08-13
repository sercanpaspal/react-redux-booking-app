import React from 'react'
import './index.scss'

const RoomScenicItem = ({ roomScenic }) => {
  const { title, photo, price_rate } = roomScenic

  return (
    <div className="room-item">
      <h3>{title}</h3>
      <img src={photo} />
      <footer>
        <span>Fiyata etki oranı</span>
        <span className="__value">{`+${price_rate}%`}</span>
      </footer>
    </div>
  )
}

export default RoomScenicItem
