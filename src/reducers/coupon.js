import {
  COUPON_FAIL_LOADED,
  COUPON_LOAD,
  COUPON_SUCCESS_LOADED,
} from '../constants/actionTypes'

const initialState = {
  loading: false,
  data: {},
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case COUPON_LOAD:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case COUPON_SUCCESS_LOADED:
      return {
        ...state,
        data: action.payload,
        loading: false,
      }
    case COUPON_FAIL_LOADED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state
  }
}
