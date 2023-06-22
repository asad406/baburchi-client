/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img3.jpg'

const NewRecipes = () => {
    return (
        <div className='bg-light pt-1 pb-5'>
            <Container>
                <h1 className="text-center text-info mt-5">
                    Newest Recipes form Baurchi
                </h1>
                <hr />

                <CardGroup>
      <Card>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Special Murgi Bhuna</Card.Title>
          
        </Card.Body>
        <Card.Footer>
        <small className="text-muted text-center">By Rashida Rahman</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={img2} />
        <Card.Body>
          <Card.Title>Khashi Rejala</Card.Title>
          
        </Card.Body>
        <Card.Footer>
        <small className="text-muted text-center">By Sadia Afroz</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={img3} />
        <Card.Body>
          <Card.Title>Kala Bhuna</Card.Title>
          
        </Card.Body>
        <Card.Footer>
          <small className="text-muted text-center">By Farzana Ahmed</small>
        </Card.Footer>
      </Card>
    </CardGroup>
            </Container>
        </div>
    );
};

export default NewRecipes;
