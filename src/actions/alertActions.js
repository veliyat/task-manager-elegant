import * as types from '../config/actionTypes'

/**
 * 
 * @param {text, color} msg 
 */
export const setAlertAction = msg => {
    return {
        type: types.SET_ALERT,
        msg
    }
}

export const resetAlertAction = () => {
    return {
        type: types.RESET_ALERT
    }
}