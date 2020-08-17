import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

import Task from '../../models/Task'

import TaskForm from './TaskForm/TaskForm.jsx'
import TaskList from './TaskList/TaskList.jsx'

class TaskManager extends Component {

    state = {
        tasks: [
            new Task(1, 'Learn ReactJS'),
            new Task(2, 'Learn Components'),
            new Task(3, 'Learn Props'),
            new Task(4, 'Learn Models'),
            new Task(5, 'Learn Redux'),
            new Task(6, 'Learn Saga'),
        ]
    }

    addTask = (data) => {
        const task = new Task(
            this.state.tasks.length + 1,
            data.title,
            data.description
        )

        this.setState({
            tasks: [
                ...this.state.tasks,
                task
            ]
        })
    }

    render() {
        return (
            <Row>
                <Col>
                    <TaskForm addTask={this.addTask} />
                </Col>

                <Col>
                    <TaskList tasks={this.state.tasks} />
                </Col>
            </Row >
        )
    }

}

export default TaskManager