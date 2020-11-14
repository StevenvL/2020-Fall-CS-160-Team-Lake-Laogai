import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'

function Login(){
    return(
        <Container className="login-container login-component">
            <h1>Welcome Back</h1>    
            <Form className="form">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder="Enter username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="normal" type="submit">
                    Login
                </Button>
            </Form>
            <p className="text-muted"> New to Pokeboba?</p>
            <Button variant="outline" href="/signUp">Create New Account</Button>

        </Container>
    )
}

export default Login