import { takeEvery, call, put, all } from 'redux-saga/effects'

import * as types from '../config/actionTypes'
import * as service from '../services/TaskService'
import * as actions from '../actions/taskActions'
import * as alert from '../actions/alertActions'

//Worker Sagas
function* loadTasks() {
    try {
        const tasks = yield call(service.getTasks)
        yield put(actions.tasksLoadedAction(tasks))
    } catch (e) {
        console.log(e)
    }
}

function* addTask({ data }) {
    try {
        const task = yield call(service.addTask, data)
        yield put(actions.taskAddedAction(task))
        yield put(alert.setAlertAction({
            text: 'Task Added!',
            color: 'success'
        }))
    } catch (e) {
        yield put(alert.setAlertAction({
            text: 'Task Not Added.',
            color: 'danger'
        }))
    }
}

function* deleteTask({ id }) {
    try {
        yield call(service.deleteTask, id)
        yield put(actions.taskDeletedAction(id))
        yield put(alert.setAlertAction({
            text: 'Task Deleted!',
            color: 'success'
        }))
        // yield put(actions.loadTasksAction())
    } catch (e) {
        yield put(alert.setAlertAction({
            text: 'Task Not Deleted.',
            color: 'danger'
        }))
    }
}

//Watcher Sagas
function* watchLoadTasks() {
    yield takeEvery(types.LOAD_TASKS, loadTasks)
}

function* watchAddTask() {
    yield takeEvery(types.ADD_TASK, addTask)
}

function* watchDeleteTask() {
    yield takeEvery(types.DELETE_TASK, deleteTask)
}

export function* taskSaga() {
    yield all([
        watchLoadTasks(),
        watchAddTask(),
        watchDeleteTask()
    ])
}