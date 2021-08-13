import {
  RESERVATION_FAIL_LOADED,
  RESERVATION_LOAD,
  RESERVATION_SUCCESS_DELETED,
  RESERVATION_SUCCESS_LOADED,
  UPDATE_RESERVATION,
  DELETE_RESERVATION,
} from '../constants/actionTypes'

const initialState = {
  loading: false,
  data: JSON.parse(localStorage.getItem('reservation')) || {},
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RESERVATION_LOAD:
      return { ...state, loading: true, error: null }
    case RESERVATION_FAIL_LOADED:
      return { ...state, loading: false, error: action.payload }
    case RESERVATION_SUCCESS_LOADED:
      return { ...state, loading: false, data: action.payload }
    case RESERVATION_SUCCESS_DELETED:
      return { ...state, loading: false }
    case UPDATE_RESERVATION:
      return { ...state, data: { ...state.data, ...action.payload } }
    case DELETE_RESERVATION:
      return { ...state, data: {} }
    default:
      return state
  }
}
