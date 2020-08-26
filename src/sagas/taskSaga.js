import { takeEvery, call, put, all } from 'redux-saga/effects'

import * as types from '../config/actionTypes'
import * as service from '../services/TaskService'
import * as actions from '../actions/taskActions'

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
    } catch (e) {
        console.log(e)
    }
}

function* deleteTask({ id }) {
    try {
        yield call(service.deleteTask, id)
        yield put(actions.taskDeletedAction(id))
        // yield put(actions.loadTasksAction())
    } catch (e) {
        console.log(e)
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