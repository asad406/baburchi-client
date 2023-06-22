/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Figure, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch((error) => console.log(error));
    };

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'none',
            marginLeft: isActive ? 20 : 20,
        };
    };
    return (
        <div className='bg-light border-bottom border-info'>
            <Container >
            <Navbar
                bg="light"
                expand="lg"
            >
                <Navbar.Brand className="fw-semibold fs-2 text-info">
                    Baburchi
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink
                            to="/"
                            style={navLinkStyles}
                            className="text-black"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/blog"
                            style={navLinkStyles}
                            className="text-black"
                        >
                            Blog
                        </NavLink>
                    </Nav>
                    <div className=" d-flex">
                        {user && (
                            <Figure>
                                <Figure.Image
                                    className="me-3"
                                    width={40}
                                    height={40}
                                    alt="Image"
                                    title={user?.displayName}
                                    // src={'https://i.ibb.co/CbyZVm0/banner.png'}
                                    src ={user.photoURL}
                                    roundedCircle
                                />
                            </Figure>
                        )}

                        {user ? (
                            <Link to="/">
                                <Button
                                    onClick={handleLogOut}
                                    variant="outline-info"
                                >
                                    Logout
                                </Button>
                            </Link>
                        ) : (
                            <Link to="/login">
                                <Button variant="outline-info">Login</Button>
                            </Link>
                        )}
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </Container>
        </div>
    );
};

export default Header;
