import React from 'react';
import { Container, Card, CardDeck, Button } from 'react-bootstrap'

function Blogs(){
    return(
        <Container className="componentBody">
            <h1>Blogs</h1>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src="/blog1.jpg" />
                    <Card.Body>
                    <Card.Title>Lorem</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam ...
                    </Card.Text>
                    <Button variant="normal" size="sm">Read More</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="/blog2.jpg" />
                    <Card.Body>
                    <Card.Title>Lorem</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam ... 
                    </Card.Text>
                    <Button variant="normal" size="sm">Read More</Button>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="/blog3.jpg" />
                    <Card.Body>
                    <Card.Title>Lorem</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam ...
                    </Card.Text>
                    <Button variant="normal" size="sm">Read More</Button>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </Container>
        
    )
}

export default Blogs;