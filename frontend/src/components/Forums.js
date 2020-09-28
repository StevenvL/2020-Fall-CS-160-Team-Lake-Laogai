import React from 'react';
import { Container, Card, Button } from 'react-bootstrap'

function Forums(){
    return( 
        <Container className="componentBody">
            <h1>Forums</h1>
            <Card>
                <Card.Header>Lorem</Card.Header>
                <Card.Body>
                    <Card.Img src="/bobabackground.jpg" />
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Card.Text>
                    <Button variant="normal">Like</Button>
                    <Button variant="normal">Comment</Button>
                </Card.Body>
            </Card>

            <Card>
                <Card.Header>Lorem</Card.Header>
                <Card.Body>
                    <Card.Img src="/bobabackground.jpg" />
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Card.Text>
                    <Button variant="normal">Like</Button>
                    <Button variant="normal">Comment</Button>
                </Card.Body>
            </Card>
        </Container>
        
    )
}

export default Forums;