import { SET_PAGE } from '../constants/actionTypes'

const initialState = localStorage.getItem('page') || 0

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return action.payload
    default:
      return state
  }
}
