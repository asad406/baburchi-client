/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const [error, setError] = useState(false);

    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const googleUser = result.user;
                console.log(googleUser.photoURL);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError('Error! input right Email/Password');
            });
    };
    const handleGithubSignIn = () => {
        githubSignIn()
            .then((result) => {
                const gitUser = result.user;
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError('Error! input right Email/Password');
            });
    };
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const loggedUser = result.user;
                
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError('Error! input right Email/Password');
            });
    };
    return (
        <Container >
            <div className="w-50 mx-auto shadow border rounded bg-light my-4 p-4">
            <h3>Please Login</h3>
            <div className='mb-4'>
            <Form onSubmit={handleLogin}>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        required
                    />
                </Form.Group>

                <Form.Group
                    className="mb-3"
                    controlId="formBasicPassword"
                >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                </Form.Group>

                <Button
                    variant="info"
                    type="submit"
                    className='fw-semibold text-white'
                >
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link className='text-decoration-none text-info' to="/register">Register</Link>
                </Form.Text>
                <br />
                <div className="text-center">
                    <Button
                        onClick={handleGoogleSignIn}
                        className="my-2 fw-semibold"
                        variant="outline-info"
                    >
                        <span className='me-2'><FaGoogle/></span>
                        Google Login
                    </Button>
                    <br />
                    <Button
                        onClick={handleGithubSignIn}
                        variant="outline-info"
                        className="fw-semibold"
                    >
                        <span className='me-2'><FaGithub/></span>
                        
                        GitHub Login
                    </Button>
                </div>
                <Form.Text className="text-success"></Form.Text>
                
            </Form>
            </div>
            {error && <div className='d-flex align-items-center justify-content-center'>
            <Form.Text className="mt-2 text-danger text-center border border-danger px-5 py-1 rounded">{error}</Form.Text>
            </div>}
            </div>
        </Container>
    );
};

export default Login;
