import { all } from 'redux-saga/effects'

import { taskSaga } from './taskSaga'
import { userSaga } from './userSaga'

function* rootSaga() {
    yield all([
        taskSaga(),
        userSaga()
    ])
}

export default rootSaga