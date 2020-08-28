import React, { Component } from 'react'
import { Alert, Card, CardHeader, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'

import { getSingleTask } from '../../../services/TaskService'

class TaskDetail extends Component {

    state = {
        task: null
    }

    componentDidMount() {
        const { id } = this.props.match.params
        getSingleTask(id).then(task => this.setState({ task }))
    }

    render() {

        const { task } = this.state

        if (task) {
            return (
                <Card>
                    <CardHeader>
                        <h3>{task.title}</h3>
                    </CardHeader>

                    <CardBody>
                        <p>{task.description}</p>
                        <p>
                            <Link to="/tasks">Back to Tasks</Link>
                        </p>
                    </CardBody>
                </Card>
            )
        }

        return <Alert>Loading...</Alert>
    }

}

export default TaskDetail