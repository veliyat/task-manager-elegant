import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import logger from 'redux-logger'

import rootReducer from './reducers/rootReducer'
import rootSaga from './sagas/rootSaga'

import { checkUser } from './services/UserService'
import { userLoggedIn } from './actions/userActions'

const saga = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(saga))

const user = checkUser()
if (user) {
    store.dispatch(userLoggedIn(user))
}

saga.run(rootSaga)

export default store