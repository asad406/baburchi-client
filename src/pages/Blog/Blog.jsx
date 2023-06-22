/* eslint-disable no-unused-vars */
import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import PDFFile from './PDFfile';

const Blog = () => {
    return (
        <Container>
            <div className='d-flex align-items-center justify-content-between bg-info px-2'>
            <h5 className='fw-bold'>Tech Blog</h5>
            <PDFDownloadLink document={<PDFFile/>} fileName='TechBlog'>
                {({loading}) => (loading ? <Button>Loading...</Button> : <Button className='fw-semibold my-3'>Download PDF</Button>)}
            </PDFDownloadLink>
            
            </div>
            <h5>
                Question: differences between uncontrolled and controlled
                components?
            </h5>
            <p>
            <span className='fw-bold '>Answer:</span> A controlled component is one where the state
                within the component is used to handle the form data . The input
                form element is handled by React itself rather than the DOM .
                The mutable state is kept in the state property and will be
                updated only with the setState() method.
                <br />
                On the other hand, an uncontrolled component is one where the
                DOM handles the form data by itself in the component . These
                components are not controlled by the React state and are handled
                by the DOM (Document Object Model). To access any value that has
                been entered, we take the help of refs .
            </p>
            <h5>Question: How to validate React props using PropTypes?</h5>
            <p>
            <span className='fw-bold '>Answer:</span> PropTypes . You can import PropTypes from the
                prop-types package . The PropTypes utility exports a wide range
                of validators for configuring type definitions . You can use it
                to validate data types of various React entities . For
                instance, if you have a component AddPerson and you want to
                validate that the history prop is an object
            </p>
            <h5>
                Question: Difference between nodejs and express js?
            </h5>
            <p>
            <span className='fw-bold '>Answer:</span>
                Node.js is a platform for building server-side event-driven I/O applications using JavaScript . It is an open-source, cross-platform JavaScript runtime environment for executing JavaScript code server-side. 
                <br />
                On the other hand, Express.js is a framework based on Node.js for building web applications using approaches and principles of Node.js event-driven architecture . It is primarily a routing and middleware framework that is used to develop web applications, APIs, and mobile applications
            </p>
            <h5>
                Question:What is a custom hook, and why will you create a custom
                hook?
            </h5>
            <p>
                <span className='fw-bold '>Answer:</span>
                 In React, a custom hook is a function that starts with the word “use” and may call other Hooks. The “useWhatever” naming convention mainly allows the linter to find bugs in how these hooks are used, for example, scenarios where their usage goes against the rules of Hooks1. When you have component logic that needs to be used by multiple components, you can extract that logic to a custom Hook2. This allows you to reuse logic across components.
            </p>
        </Container>
    );
};

export default Blog;
