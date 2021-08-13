import React, { useRef } from 'react'
import { connect } from 'react-redux'
import CreditCardForm from '../../components/CreditCardForm'
import Button from '../../components/Button'
import Footer from '../../components/Footer'
import { goPage } from '../../constants/actions'
import ReservationPreview from '../../components/ReservationPreview'
import CouponForm from '../../components/CouponForm'
import CheckoutPriceCard from '../../components/CheckoutPriceCard'
import './index.scss'
import { HOTEL_ROOM_PAGE } from '../../constants/pages'

const CheckoutPage = ({ reservation, goPage }) => {
  const creditCardFormRef = useRef(null)

  const { loading } = reservation

  return (
    <div className="checkout-page">
      <div className="__content">
        <div className="__payment-section">
          <CreditCardForm formRef={creditCardFormRef} />
        </div>
        <div className="__preview-section">
          <ReservationPreview />

          <CouponForm />

          <CheckoutPriceCard />
        </div>
      </div>

      <Footer>
        <Button onClick={() => goPage(HOTEL_ROOM_PAGE)}>Geri</Button>
        <Button
          disabled={loading}
          type="button"
          onClick={() => creditCardFormRef.current.handleSubmit()}
        >
          Ödeme Yap ve Bitir
        </Button>
      </Footer>
    </div>
  )
}

const mapStateToProps = ({ reservation }) => ({ reservation })

const mapDispatchToProps = { goPage }

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)
