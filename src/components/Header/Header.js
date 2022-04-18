import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <Navbar className='sticky-top' bg="light" expand="lg">
            <Container className='sticky-top'>
                <Navbar.Brand as={Link} to="home">The Financial 360</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link as={Link} to="home#services">Services</Nav.Link>
                        <Nav.Link as={Link} to="blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="about">About</Nav.Link>
                    </Nav>
                    <Nav>{/* conditional signOut button */}
                        {user ?
                            <button onClick={() => signOut(auth)} className='border-0 bg-secondary bg-gradient text-white rounded-pill px-3'>Sign Out</button>
                            :
                            <Nav.Link className='border-0 bg-info bg-gradient text-dark rounded-pill px-3 py-0' as={Link} to="login">Sign In</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;