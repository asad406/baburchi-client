/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaRegCalendarAlt, FaThumbsUp, FaUtensils } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
const Chefs = () => {
    const chefs = useLoaderData();

    return (
        
        <Container className="my-5">
                <h1 className='text-center text-info mt-5'>Our Experienced Baurchi</h1>
                <hr />
                <Row
                    xs={1}
                    md={3}
                    className="g-4"
                >
                    {chefs.map((chef) => (
                        <Col key={chef.id}>
                            <Card className="border shadow">
                                <LazyLoad height={410} width={410} threshold={0.95}>
                                <Card.Img
                                    variant="top"
                                    src={chef.chefPicture}
                                    
                                />
                                </LazyLoad>
                                <Card.Body className='fw-semibold'>
                                    <Card.Title>{chef.chefName}</Card.Title>
                                    <Card.Text>
                                        <span className="border border-info p-2 rounded d-block">
                                            Experience
                                        </span>
                                        <span className='fs-3 me-2'><FaRegCalendarAlt/></span>
                                        <span className='ms-2'>{chef.yearsOfExperience} Years</span>
                                    </Card.Text>
                                    <Card.Text>
                                        <span className="border border-info p-2 rounded d-block">
                                            Number of Recipes
                                        </span>
                                        <span className='fs-3 me-2'><FaUtensils/></span>
                                        <span className='ms-2'>{chef.numberOfRecipes} Recipes</span>
                                    </Card.Text>
                                    <Card.Text >
                                        <span className="border border-info p-2 rounded d-block">
                                            Likes
                                        </span>
                                       <span className='fs-3 me-2'> <FaThumbsUp /></span> {chef.likes}
                                    </Card.Text>
                                    <Button variant="outline-info"
                                    className='shadow'
                                   
                                    >
                                        <Link  className=' text-decoration-none fw-semibold text-black ' to={`/recipes/${chef.id}`}>
                                            View Recipes
                                        </Link>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
    );
};

export default Chefs;