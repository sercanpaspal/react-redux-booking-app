import React from 'react'
import CheckoutPriceCard from '../../components/CheckoutPriceCard'
import ReservationPreview from '../../components/ReservationPreview'
import { Reservation } from '../../components/Icons'
import './index.scss'
import Button from '../../components/Button'
import {
  goPage,
  deleteReservation,
  newReservation,
} from '../../constants/actions'
import { connect } from 'react-redux'

const ConfirmationPage = ({
  goPage,
  reservation,
  deleteReservation,
  newReservation,
}) => {
  const {
    loading,
    data: { id },
  } = reservation

  return (
    <div className="confirmation-page">
      <div className="__info">
        <div className="__icon">
          <Reservation />
        </div>
        <h2>Rezervasyon Kaydınız Alınmıştır.</h2>
        <div className="__bottom">
          <p>
            Rezervasyon özetiniz aşağıdaki gibidir. Rezervasyon kaydınızda
            değişiklik veya yeni rezervasyon yapmak için aşağıdaki linkleri
            kullanabilirsiniz.
          </p>
          <div>
            <Button disabled={loading} onClick={() => newReservation()}>
              Yeni Rezervasyon Yap
            </Button>
            <Button disabled={loading} onClick={() => goPage(0)}>
              Rezervasyonu Güncelle
            </Button>
            <Button
              disabled={loading}
              onClick={() => confirm('Emin misiniz?') && deleteReservation(id)}
            >
              Rezervasyonu İptal Et
            </Button>
          </div>
        </div>
      </div>
      <div className="__preview">
        <ReservationPreview />

        <CheckoutPriceCard />
      </div>
    </div>
  )
}

const mapStateToProps = ({ reservation }) => ({ reservation })

const mapDispatchToProps = { goPage, deleteReservation, newReservation }

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationPage)
