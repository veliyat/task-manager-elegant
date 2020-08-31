import React from 'react'
import { connect } from 'react-redux'
import { Alert } from 'reactstrap'

import { resetAlertAction } from '../../../actions/alertActions'

const GlobalAlert = props => {

    const { text, color } = props.alert

    setTimeout(() => props.dispatch(resetAlertAction()), 3000)

    if (text === '') {
        return <></>
    }

    return (
        <Alert color={color}>{text}</Alert>
    )
}

const mapStateToProps = state => {
    return {
        alert: state.alert
    }
}

export default connect(mapStateToProps)(GlobalAlert)