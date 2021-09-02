import { createStore } from 'redux'
import middlewares from './middlewares'
import rootReducer from './reducers'
import storage from 'local-redux-storage'

export const store = createStore(storage(rootReducer), middlewares())
