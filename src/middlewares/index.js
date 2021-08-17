import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reservationMiddleware from './reservation'

export default () => applyMiddleware(thunk, reservationMiddleware)
