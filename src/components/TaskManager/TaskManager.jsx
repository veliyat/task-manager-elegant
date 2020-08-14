import React from 'react'
import { Row, Col } from 'reactstrap'

import Task from '../../models/Task'

import TaskForm from './TaskForm/TaskForm.jsx'
import TaskList from './TaskList/TaskList.jsx'

const TaskManager = props => {
    const tasks = [
        new Task(1, 'Learn ReactJS'),
        new Task(2, 'Learn Components'),
        new Task(3, 'Learn Props'),
        new Task(4, 'Learn Models'),
        new Task(5, 'Learn Redux'),
        new Task(6, 'Learn Saga'),
    ]

    return (
        <Row>
            <Col>
                <TaskForm />
            </Col>

            <Col>
                <TaskList tasks={tasks} />
            </Col>
        </Row>
    )
}

export default TaskManager