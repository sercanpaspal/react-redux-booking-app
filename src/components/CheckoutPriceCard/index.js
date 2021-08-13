import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { dayBetweenTwoDate } from '../../api'
import { updateReservation } from '../../constants/actions'
import Price from '../Price'
import './index.scss'

const CheckoutPriceCard = ({
  reservation,
  hotel,
  coupon,
  updateReservation,
}) => {
  const { room_type = [], room_scenic = [] } = hotel

  const roomPrice =
    room_type.find((s) => s.id == reservation.room_type)?.price || 0

  const priceRate =
    room_scenic.find((s) => s.id == reservation.room_scenic)?.price_rate || 0

  const { adult, start_date, end_date } = reservation

  const day = dayBetweenTwoDate(start_date, end_date)

  const discount = coupon?.discount_ammount || 0

  const subTotal = roomPrice * adult * day

  const scenicCost = (subTotal * priceRate) / 100

  const price = subTotal + scenicCost - discount

  useEffect(() => updateReservation({ price }), [price])

  return (
    <div className="checkout-price-card">
      <ul>
        <li>
          <strong>Oda Fiyatı</strong>
          <span>
            <Price price={roomPrice} />
          </span>
        </li>
        <li>
          <strong>Fiyat Etki Oranı</strong>
          <span>%{priceRate}</span>
        </li>
        <li>
          <strong>
            Konaklama{' '}
            <small>
              ({day} gün, {adult} yetişkin)
            </small>
          </strong>
          <span>
            <Price price={subTotal} />
          </span>
        </li>
        {coupon?.code && (
          <li>
            <strong>
              İndirim <small>({coupon?.code})</small>
            </strong>
            <span>
              <Price price={-1 * discount} />
            </span>
          </li>
        )}
      </ul>
      <div>
        <span>TOPLAM TUTAR</span>
        <strong>
          <Price price={price} />
        </strong>
      </div>
    </div>
  )
}

const mapStateToProps = ({ reservation, hotel, coupon }) => ({
  reservation: reservation.data,
  hotel: hotel.data,
  coupon: coupon.data,
})

const mapDispatchToProps = { updateReservation }

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPriceCard)
