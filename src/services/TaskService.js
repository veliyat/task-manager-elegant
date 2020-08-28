import axios from 'axios'
import { taskURL } from '../config/api'

export const getTasks = () => {
    return axios.get(taskURL).then(res => res.data)
}

export const getSingleTask = id => {
    return axios.get(taskURL + '/' + id).then(res => res.data)
}

/**
 * 
 * @param {title, description} data 
 */
export const addTask = (data) => {
    data.date = new Date()
    data.completed = false
    return axios.post(taskURL, data).then(res => res.data)
}

export const deleteTask = (id) => {
    return axios.delete(taskURL + '/' + id).then(res => res.data)
}