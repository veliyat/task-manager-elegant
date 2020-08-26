import { all } from 'redux-saga/effects'

import { taskSaga } from './taskSaga'

function* rootSaga() {
    yield all([
        taskSaga()
    ])
}

export default rootSaga