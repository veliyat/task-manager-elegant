import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { ListGroup, Alert } from 'reactstrap'

import { loadTasksAction } from '../../../actions/taskActions'

import TaskItem from './TaskItem/TaskItem.jsx'

const TaskList = props => {
    const { tasks } = props

    useEffect(() => { props.loadTasks() }, [])

    if (tasks.length === 0) {
        return <Alert>No Tasks to show.</Alert>
    }

    return (
        <ListGroup>
            {tasks.map((task) => <TaskItem key={task.id} task={task} />)}
        </ListGroup>
    )
}

// class TaskList extends Component {

//     // constructor(props) {
//     //     super(props)

//     //     console.log('Inside Constructor')
//     // }

//     componentDidMount() {
//         // console.log('Inside Did Mount')
//         this.props.loadTasks()
//     }

//     render() {
//         // console.log('Inside Render')

//         const { tasks } = this.props

//         if (tasks.length === 0) {
//             return <Alert>No Tasks to show.</Alert>
//         }

//         return (
//             <ListGroup>
//                 {tasks.map((task) => <TaskItem key={task.id} task={task} />)}
//             </ListGroup>
//         )
//     }
// }

const mapStateToProps = (state) => { //store.getState()
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadTasks: () => dispatch(loadTasksAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)