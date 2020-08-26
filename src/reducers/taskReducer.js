import { TASK_ADDED, TASK_DELETED, TASKS_LOADED } from '../config/actionTypes'

const initialState = []

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case TASKS_LOADED:
            return action.tasks

        case TASK_ADDED:
            return [
                ...state,
                action.task
            ]

        case TASK_DELETED:
            const { id } = action
            return state.filter(task => task.id !== id)

        default:
            return state
    }
}