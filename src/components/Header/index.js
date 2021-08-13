import React from 'react'
import { connect } from 'react-redux'
import { newReservation } from '../../constants/actions'
import Button from '../Button'
import './index.scss'

const Header = ({ newReservation }) => {
  return (
    <header className="header">
      <div>
        <h1>Otel</h1>
        <h2>Rezervasyon Sistemi</h2>
      </div>
      <Button onClick={() => newReservation()}>Yeni Rezervasyon Yap</Button>
    </header>
  )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = { newReservation }

export default connect(mapStateToProps, mapDispatchToProps)(Header)
