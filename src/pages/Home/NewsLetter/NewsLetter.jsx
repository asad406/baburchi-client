/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';

const NewsLetter = () => {
    return (
        <Container className='mb-5 pb-5'>
            <h1 className="text-center text-info mt-5">
            Subscribe to weekly newsletter.
            </h1>
            <p className="text-center">
                Get a weekly round-up of the latest recipes, dinner ideas & tips
                from Babuchi
            </p>

            <div className="mb-3 d-flex justify-content-center align-items-center">
            <InputGroup className="mb-3 w-50 d-flex justify-content-center align-items-center">
                <Form.Control
                    placeholder="Email Address"
                    aria-label="Recipient's username"
                    // aria-describedby="basic-addon2"
                    className='border-info'
                />
                <Button
                    variant="outline-info"
                    id="button-addon2"
                    className='fw-bold'
                >
                    SIGN UP
                </Button>
            </InputGroup>
            </div>
        </Container>
    );
};

export default NewsLetter;
