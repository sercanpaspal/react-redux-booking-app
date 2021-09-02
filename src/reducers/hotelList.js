import {
  HOTEL_LIST_FAIL_LOADED,
  HOTEL_LIST_LOAD,
  HOTEL_LIST_SUCCESS_LOADED,
} from '../constants/actionTypes'

const initialState = {
  loading: false,
  data: [],
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case HOTEL_LIST_LOAD:
      return {
        ...state,
        loading: true,
      }
    case HOTEL_LIST_SUCCESS_LOADED:
      return {
        ...state,
        data: action.payload,
        loading: false,
      }
    case HOTEL_LIST_FAIL_LOADED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state
  }
}
