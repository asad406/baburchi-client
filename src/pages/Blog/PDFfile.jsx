/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Page, Text, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman',
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
    },
});

const PDFFile = () => {
    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.title}>
                    Question: differences between uncontrolled and controlled
                    components?
                </Text>
                <Text style={styles.text}>
                    Controlled component is one where the state within the
                    component is used to handle the form data . The input form
                    element is handled by React itself rather than the DOM . The
                    mutable state is kept in the state property and will be
                    updated only with the setState() method. On the other hand,
                    an uncontrolled component is one where the DOM handles the
                    form data by itself in the component . These components are
                    not controlled by the React state and are handled by the DOM
                    (Document Object Model). To access any value that has been
                    entered, we take the help of refs .
                </Text>
                <Text style={styles.title}>
                    Question: How to validate React props using PropTypes?
                </Text>
                <Text style={styles.text}>
                    PropTypes . You can import PropTypes from the prop-types
                    package . The PropTypes utility exports a wide range of
                    validators for configuring type definitions . You can use it
                    to validate data types of various React entities . For
                    instance, if you have a component AddPerson and you want to
                    validate that the history prop is an object
                </Text>
                <Text style={styles.title}>
                    Question: Difference between nodejs and express js?
                </Text>

                <Text style={styles.text}>
                    Node.js is a platform for building server-side event-driven
                    I/O applications using JavaScript . It is an open-source,
                    cross-platform JavaScript runtime environment for executing
                    JavaScript code server-side. On the other hand, Express.js
                    is a framework based on Node.js for building web
                    applications using approaches and principles of Node.js
                    event-driven architecture . It is primarily a routing and
                    middleware framework that is used to develop web
                    applications, APIs, and mobile applications
                </Text>
                <Text style={styles.title}>
                    Question:What is a custom hook, and why will you create a
                    custom hook?
                </Text>

                <Text style={styles.text}>
                    In React, a custom hook is a function that starts with the
                    word “use” and may call other Hooks. The “useWhatever”
                    naming convention mainly allows the linter to find bugs in
                    how these hooks are used, for example, scenarios where their
                    usage goes against the rules of Hooks1. When you have
                    component logic that needs to be used by multiple
                    components, you can extract that logic to a custom Hook2.
                    This allows you to reuse logic across components.
                </Text>
            </Page>
        </Document>
    );
};

export default PDFFile;
