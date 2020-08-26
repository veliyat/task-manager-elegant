import * as types from '../config/actionTypes'

export const loadTasksAction = () => {
    return {
        type: types.LOAD_TASKS
    }
}

export const tasksLoadedAction = tasks => {
    return {
        type: types.TASKS_LOADED,
        tasks
    }
}

/**
 * 
 * @param {title, description} data 
 */
export const addTaskAction = (data) => {
    return {
        type: types.ADD_TASK,
        data
    }
}

export const taskAddedAction = (task) => {
    return {
        type: types.TASK_ADDED,
        task
    }
}

export const deleteTaskAction = (id) => {
    return {
        type: types.DELETE_TASK,
        id
    }
}

export const taskDeletedAction = (id) => {
    return {
        type: types.TASK_DELETED,
        id
    }
}