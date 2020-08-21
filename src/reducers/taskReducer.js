import { ADD_TASK, DELETE_TASK } from '../config/actionTypes'
import Task from '../models/Task'

const initialState = [
    new Task(1, 'Learn Redux'),
    new Task(2, 'Learn Redux Saga'),
    new Task(3, 'Learn Axios')
]

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const { data } = action
            const task = new Task(
                state.length + 1,
                data.title,
                data.description
            )

            return [
                ...state,
                task
            ]

        case DELETE_TASK:
            const { id } = action
            return state.filter(task => task.id !== id)

        default:
            return state
    }
}