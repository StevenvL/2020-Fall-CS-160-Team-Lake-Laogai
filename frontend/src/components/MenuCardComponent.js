import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap'

class MenuCardComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Card>
                    <Card.Img variant="top"  src="/blog1.jpg" />
                    <Card.Body>
                        <Card.Title>{this.props.drink.name}</Card.Title>
                        <Card.Text>
                            Drink Description
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam ...
                                </Card.Text>
                        <Button variant="normal" size="sm">Read More</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default MenuCardComponent