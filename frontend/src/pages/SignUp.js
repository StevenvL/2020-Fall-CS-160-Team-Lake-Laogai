import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'

function SignUp(){
    return(
        <Container className="login-container">
        <h1>Sign Up</h1>    
        <Form className="form">
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Comfirm Password</Form.Label>
                <Form.Control type="password" placeholder="Comfirm Password" />
            </Form.Group>
            
            <Button variant="normal" type="submit">
                Sign Up
            </Button>
        </Form>

    </Container>
    )
}

export default SignUp