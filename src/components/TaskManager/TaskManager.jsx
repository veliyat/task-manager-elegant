import React from 'react'
import { Row, Col } from 'reactstrap'

import TaskForm from './TaskForm/TaskForm.jsx'
import TaskList from './TaskList/TaskList.jsx'

const TaskManager = props => {
    return (
        <Row>
            <Col>
                <TaskForm />
            </Col>

            <Col>
                <TaskList />
            </Col>
        </Row>
    )
}

export default TaskManager