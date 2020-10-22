import React from 'react'
import { Container , Form , Col , Button} from 'react-bootstrap'

function AddStore(){
    return(
        <Container className="componentBody">
            <h1> Add a New Store</h1>
            <Form className="form">
                <Form.Group>
                    <Form.Label>Store Name</Form.Label>
                    <Form.Control placeholder="boba store name" />
                </Form.Group>
                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>
                <Form.Row>         
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    <Form.Label>Menu</Form.Label>
                    <Form.Control placeholder="salted cheese milk tea, brown sugar boba, fruit tea, ... " />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Sugar Level</Form.Label>
                    <Form.Control placeholder="25% 50% 75%" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Ice Level</Form.Label>
                    <Form.Control placeholder="25% 50% 75%" />
                </Form.Group>
                <Button variant="outline" type="submit">
                    Add
                </Button>
            </Form>         
        </Container>
    )
    
}

export default AddStore;