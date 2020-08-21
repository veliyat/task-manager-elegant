import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer, applyMiddleware(logger))

console.log(store.getState())

export default store