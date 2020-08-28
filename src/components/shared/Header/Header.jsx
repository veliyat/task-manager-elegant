import React from 'react'
import { Row, Col } from 'reactstrap'
import Nav from '../Nav/Nav'

const Header = props => {
    return (
        <>
            <Row>
                <Col xs={8}>
                    <h1>Task Manager</h1>
                </Col>

                <Col>
                    <Nav />
                </Col>
            </Row>

            <hr />
        </>
    )
}

export default Header