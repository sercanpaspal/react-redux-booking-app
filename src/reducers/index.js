import { combineReducers } from 'redux'

import page from './page'
import hotelList from './hotelList'
import hotel from './hotel'
import reservation from './reservation'
import coupon from './coupon'

export default combineReducers({
  page,
  hotelList,
  hotel,
  reservation,
  coupon,
})
