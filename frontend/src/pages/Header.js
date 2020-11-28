import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import React from 'react'
import "../styling.css"

function Header(){
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
            <img
                alt=""
                src="/logo.png"
                width="40"
                height="40"
                className="d-inline-block align-top"
            /> {' '}
                Pokeboba
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/forums">Forums</Nav.Link>
                    <Nav.Link href="/blogs">Blog</Nav.Link>
                    <Nav.Link href="/findStore">Find a store</Nav.Link>
                    {/* <Nav.Link href="/owner">Store Owner View</Nav.Link> */}
                </Nav>                
                <Button variant="outline" href="/login">Log in</Button>
            </Navbar.Collapse>
        </Navbar>
    )

}

export default Header;