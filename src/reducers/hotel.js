import {
  HOTEL_LOAD,
  HOTEL_SUCCESS_LOADED,
  HOTEL_FAIL_LOADED,
  DELETE_HOTEL,
} from '../constants/actionTypes'

const initialState = {
  loading: false,
  data: {},
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case HOTEL_LOAD:
      return {
        ...state,
        loading: true,
      }
    case HOTEL_SUCCESS_LOADED:
      return {
        ...state,
        data: action.payload,
        loading: false,
      }
    case HOTEL_FAIL_LOADED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    case DELETE_HOTEL:
      return {
        ...state,
        data: {},
      }
    default:
      return state
  }
}
