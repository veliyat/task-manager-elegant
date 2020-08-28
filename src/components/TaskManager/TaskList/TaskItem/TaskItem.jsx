import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListGroupItem, Button } from 'reactstrap'

import { deleteTaskAction } from '../../../../actions/taskActions'

const TaskItem = props => {
    const { task } = props

    const handleDelete = () => {
        props.deleteTask(task.id)
    }

    return (
        <ListGroupItem>
            <Link to={'/tasks/' + task.id}>{task.title}</Link>
            <Button close onClick={handleDelete} />
        </ListGroupItem>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        deleteTask: (id) => {
            dispatch(deleteTaskAction(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(TaskItem)