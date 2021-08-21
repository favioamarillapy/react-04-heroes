import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const NavbarUI = () => {
    return (
        <Navbar bg="dark" fixed="top" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/marvel">
                    Heroes App
                </Navbar.Brand>

                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/marvel">
                        Marvel
                    </Nav.Link>

                    <Nav.Link as={Link} to="/dc">
                        Dc
                    </Nav.Link>

                    <Nav.Link as={Link} to="/search">
                        Search
                    </Nav.Link>
                </Nav>

                <Nav>
                    <Nav.Link as={Link} to="/login">
                        Logout
                    </Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    )
}
