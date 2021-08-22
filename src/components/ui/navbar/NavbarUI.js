import React, { useContext } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { actions } from '../../../actions/actions';
import { AuthContext } from '../../../auth/AuthContext';


export const NavbarUI = () => {

    const { user: { name }, dispatch } = useContext(AuthContext);

    const history = useHistory()

    const handleLogout = () => {
        history.replace('/login');

        dispatch({
            type: actions.logout
        });
    }

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

                <Nav className="text-info">
                    {name}
                </Nav>

                <Nav>
                    <Button
                        variant="primary"
                        onClick={handleLogout}
                        style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                    >
                        Logout
                    </Button>
                </Nav>

            </Container>
        </Navbar>
    )
}
