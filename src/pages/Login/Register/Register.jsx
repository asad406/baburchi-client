/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] =useState(false)

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (email.length < 0) {
            setError('Please Enter a valid Email');
        } else if (password.length < 0) {
            setError('Please enter valid password');
        } else if (password.length < 6) {
            setError('Password must more then 6 char.');
        } else {
            setError('');
        }

        console.log(name, photo, email, password);
        createUser(email, password)
            .then((result) => {
                if (result) {
                    setSuccess("Registration Successful")
                    updateUserProfile(name, photo)
                        .then((u) => {
                            console.log('from Register', u);
                        })
                        .catch((err) => {});
                }

                const createdUser = result.user;
            })
            .catch((error) => {
                console.log(error);
            });

    };

    const handleAccepted = (event) => {
        setAccepted(event.target.checked);
    };
    return (
        <Container>
            <div className="w-50 mx-auto shadow border rounded bg-light my-4 p-4">
                <h3>Please Register</h3>
                <Form onSubmit={handleRegister}>
                    <Form.Group
                        className="mb-3"
                        // controlId="formBasicEmail"
                    >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        // controlId="formBasicEmail"
                    >
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control
                            type="text"
                            name="photo"
                            placeholder="Photo URL"
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        // controlId="formBasicEmail"
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
                        // controlId="formBasicPassword"
                    >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        // controlId="formBasicCheckbox"
                    >
                        <Form.Check
                            onClick={handleAccepted}
                            type="checkbox"
                            name="accept"
                            label={<>Accept Terms and Conditions</>}
                        />
                    </Form.Group>

                    <Button
                        variant="info"
                        disabled={!accepted}
                        type="submit"
                        className="fw-semibold text-white"
                    >
                        Register
                    </Button>
                    
                    <br />
                    <Form.Text className="text-secondary">
                        Already Have an Account?
                        <Link
                            className="text-decoration-none text-info"
                            to="/login"
                        >
                            Login
                        </Link>
                    </Form.Text>

                    <br />
                </Form>
                {error && (
                    <div className="d-flex align-items-center justify-content-center">
                        <Form.Text className="mt-2 text-danger text-center border border-danger px-5 py-1 rounded">
                            {error}
                        </Form.Text>
                    </div>
                )}
                {success && (
                    <div className="d-flex align-items-center justify-content-center">
                        <Form.Text className="mt-2 text-success text-center border border-success px-5 py-1 rounded">
                            {success}
                        </Form.Text>
                        
                    </div>
                )}
            </div>
        </Container>
    );
};

export default Register;
