import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import localStorageMiddleware from './localStorage'
import reservationMiddleware from './reservation'

export default () =>
  applyMiddleware(thunk, localStorageMiddleware, reservationMiddleware)
