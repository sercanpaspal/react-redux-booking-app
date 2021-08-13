import agent from '../agent'
import { CHECKOUT_PAGE, HOTEL_DATE_PAGE, HOTEL_ROOM_PAGE } from './pages'
import {
  SET_PAGE,
  HOTEL_LOAD,
  HOTEL_SUCCESS_LOADED,
  HOTEL_FAIL_LOADED,
  HOTEL_LIST_LOAD,
  HOTEL_LIST_FAIL_LOADED,
  HOTEL_LIST_SUCCESS_LOADED,
  UPDATE_RESERVATION,
  RESERVATION_LOAD,
  RESERVATION_FAIL_LOADED,
  RESERVATION_SUCCESS_LOADED,
  RESERVATION_SUCCESS_DELETED,
  COUPON_FAIL_LOADED,
  COUPON_SUCCESS_LOADED,
  COUPON_LOAD,
  DELETE_RESERVATION,
} from './actionTypes'

export const goPage = (page) => (dispatch) =>
  dispatch({ type: SET_PAGE, payload: page })

export const getHotelList = () => (dispatch) => {
  dispatch({ type: HOTEL_LIST_LOAD })

  return agent.Hotel.list()
    .then((hotelList) =>
      dispatch({ type: HOTEL_LIST_SUCCESS_LOADED, payload: hotelList }),
    )
    .catch((err) => dispatch({ type: HOTEL_LIST_FAIL_LOADED, payload: err }))
}

export const getHotelDetail = (id) => (dispatch) => {
  dispatch({ type: HOTEL_LOAD })

  return agent.Hotel.detail(id)
    .then((hotel) => dispatch({ type: HOTEL_SUCCESS_LOADED, payload: hotel }))
    .catch((err) => dispatch({ type: HOTEL_FAIL_LOADED, payload: err }))
}

export const saveHotelSearchForm = (values) => (dispatch) => {
  dispatch({ type: UPDATE_RESERVATION, payload: values })
  dispatch({ type: SET_PAGE, payload: HOTEL_ROOM_PAGE })
}

export const saveHotelRoomForm = (values) => (dispatch) => {
  dispatch({ type: UPDATE_RESERVATION, payload: values })
  dispatch({ type: SET_PAGE, payload: CHECKOUT_PAGE })
}

export const newReservation = () => (dispatch) => {
  dispatch({ type: DELETE_RESERVATION })
  dispatch({ type: SET_PAGE, payload: HOTEL_DATE_PAGE })
}

export const deleteReservation = (id) => (dispatch) => {
  dispatch({ type: RESERVATION_LOAD })

  return agent.Reservation.delete(id)
    .then(() => dispatch({ type: RESERVATION_SUCCESS_DELETED }))
    .catch((err) => dispatch({ type: RESERVATION_FAIL_LOADED, payload: err }))
}

export const saveReservation =
  ({ id, ...reservation }) =>
  (dispatch) => {
    dispatch({ type: RESERVATION_LOAD })

    const { create, update } = agent.Reservation

    const action = id ? update(id, reservation) : create(reservation)

    return action
      .then((res) =>
        dispatch({ type: RESERVATION_SUCCESS_LOADED, payload: res }),
      )
      .catch((err) => dispatch({ type: RESERVATION_FAIL_LOADED, payload: err }))
  }

export const updateReservation = (reservation) => (dispatch) =>
  dispatch({ type: UPDATE_RESERVATION, payload: reservation })

export const getCoupon = (couponCode) => (dispatch) => {
  dispatch({ type: COUPON_LOAD })

  if (couponCode) {
    return agent.Coupon.get(couponCode)
      .then((couponList) => {
        if (Array.isArray(couponList) && couponList.length === 1) {
          const [coupon] = couponList
          if (new Date(coupon.expiration_at).getTime() > new Date().getTime()) {
            dispatch({ type: COUPON_SUCCESS_LOADED, payload: coupon })
          } else {
            throw new Error('Kupon kodunun son kullanma tarihi geçmiş!')
          }
        } else {
          throw new Error('Kupon kodu bulunamadı!')
        }
      })
      .catch((err) => dispatch({ type: COUPON_FAIL_LOADED, payload: err }))
  } else {
    dispatch({ type: COUPON_SUCCESS_LOADED, payload: null })
  }
}
