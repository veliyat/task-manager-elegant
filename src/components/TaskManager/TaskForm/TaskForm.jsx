import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'

import { addTaskAction } from '../../../actions/taskActions'

class TaskForm extends Component {

    state = {
        title: '',
        description: '',
        titleErr: '',
        descriptionErr: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { title, description } = this.state

        let valid = true

        if (title === '') {
            this.setState({
                titleErr: 'Title cannot be blank.'
            })
            valid = false
        }

        if (description === '') {
            this.setState({
                descriptionErr: 'Description cannot be blank.'
            })
            valid = false
        }

        if (valid) {
            const data = {
                title,
                description
            }

            this.props.addTask(data)

            this.setState({
                title: '',
                description: '',
                titleErr: '',
                descriptionErr: ''
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            [e.target.id + 'Err']: ''
        })
    }

    render() {
        const { title, description, titleErr, descriptionErr } = this.state

        return (
            <Form onSubmit={this.handleSubmit} >
                <FormGroup>
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" value={title} onChange={this.handleChange} />
                    <span id="titleErr" style={{ color: 'red', fontSize: '12px' }}>
                        {titleErr}
                    </span>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="description">Description</Label>
                    <Input type="textarea" value={description} id="description" onChange={this.handleChange} rows="5" />
                    <span id="descriptionErr" style={{ color: 'red', fontSize: '12px' }}>
                        {descriptionErr}
                    </span>
                </FormGroup>

                <Button color="primary">Add</Button>
            </Form>
        )
    }
}

const mapDispatchToProps = (dispatch) => { //store.dispatch
    return {
        addTask: (data) => {
            dispatch(addTaskAction(data))
        }
    }
}

export default connect(null, mapDispatchToProps)(TaskForm)