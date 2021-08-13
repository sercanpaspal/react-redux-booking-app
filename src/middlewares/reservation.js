import {
  COUPON_SUCCESS_LOADED,
  RESERVATION_SUCCESS_LOADED,
  UPDATE_RESERVATION,
  SET_PAGE,
  RESERVATION_SUCCESS_DELETED,
  DELETE_RESERVATION,
  DELETE_COUPON,
  DELETE_HOTEL,
} from '../constants/actionTypes'
import { HOTEL_DATE_PAGE, CHECKOUT_CONFIRMATION_PAGE } from '../constants/pages'

const reservationMiddleware = (store) => (next) => (action) => {
  if (action.type === COUPON_SUCCESS_LOADED) {
    store.dispatch({
      type: UPDATE_RESERVATION,
      payload: { coupon_code: action.payload?.code },
    })
  }

  if (action.type === RESERVATION_SUCCESS_LOADED) {
    store.dispatch({ type: SET_PAGE, payload: CHECKOUT_CONFIRMATION_PAGE })
  }

  if (action.type === DELETE_RESERVATION) {
    store.dispatch({ type: DELETE_COUPON })
    store.dispatch({ type: DELETE_HOTEL })
  }

  if (action.type === RESERVATION_SUCCESS_DELETED) {
    store.dispatch({ type: DELETE_RESERVATION })
    store.dispatch({ type: SET_PAGE, payload: HOTEL_DATE_PAGE })
  }

  return next(action)
}

export default reservationMiddleware
