import { ADD_TASK, DELETE_TASK } from '../config/actionTypes'

/**
 * 
 * @param {title, description} data 
 */
export const addTaskAction = (data) => {
    return {
        type: ADD_TASK,
        data
    }
}

export const deleteTaskAction = (id) => {
    return {
        type: DELETE_TASK,
        id
    }
}