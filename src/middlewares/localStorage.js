import {
  SET_PAGE,
  HOTEL_SUCCESS_LOADED,
  HOTEL_LIST_SUCCESS_LOADED,
  COUPON_SUCCESS_LOADED,
  UPDATE_RESERVATION,
  RESERVATION_SUCCESS_LOADED,
  DELETE_RESERVATION,
  DELETE_COUPON,
  DELETE_HOTEL,
} from '../constants/actionTypes'

const getAsJson = (key) => JSON.parse(localStorage.getItem(key))

const saveAsJson = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value))

const deleteItem = (key) => localStorage.removeItem(key)

const storageMap = {
  [HOTEL_LIST_SUCCESS_LOADED]: 'hotel_list',
  [HOTEL_SUCCESS_LOADED]: 'hotel',
  [RESERVATION_SUCCESS_LOADED]: 'reservation',
  [COUPON_SUCCESS_LOADED]: 'coupon',
  [SET_PAGE]: 'page',
}

const updateObjectMap = {
  [UPDATE_RESERVATION]: 'reservation',
}

const deleteMap = {
  [DELETE_RESERVATION]: 'reservation',
  [DELETE_COUPON]: 'coupon',
  [DELETE_HOTEL]: 'hotel',
}

const localStorageMiddleware = (store) => (next) => (action) => {
  if (storageMap.hasOwnProperty(action.type)) {
    saveAsJson(storageMap[action.type], action.payload)
  } else if (updateObjectMap.hasOwnProperty(action.type)) {
    saveAsJson(updateObjectMap[action.type], {
      ...getAsJson(updateObjectMap[action.type]),
      ...action.payload,
    })
  } else if (deleteMap.hasOwnProperty(action.type)) {
    deleteItem(deleteMap[action.type])
  }

  return next(action)
}

export default localStorageMiddleware
