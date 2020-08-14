import React from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'

const TaskForm = props => {
    return (
        <Form>
            <FormGroup>
                <Label htmlFor="title">Title</Label>
                <Input id="title" />
            </FormGroup>

            <FormGroup>
                <Label htmlFor="description">Description</Label>
                <Input type="textarea" id="description" rows="5" />
            </FormGroup>

            <Button color="primary">Add</Button>
        </Form>
    )
}

export default TaskForm