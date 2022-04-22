import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import gymlogo from '../images/logo/gymlogo.jpg'

const Header = () => {
    return (
        <>


            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={30} src={gymlogo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#experts">Experts</Nav.Link>


                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            {/* {user ?
                                <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                :
                                <Nav.Link as={Link} to="login">
                                    Login
                                </Nav.Link>} */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;