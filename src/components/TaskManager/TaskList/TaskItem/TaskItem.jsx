import React from 'react'
import { ListGroupItem, Button } from 'reactstrap'

const TaskItem = props => {
    const { task } = props
    // const task = props.task

    return (
        <ListGroupItem>
            {task.title}
            <Button close />
        </ListGroupItem>
    )
}

export default TaskItem