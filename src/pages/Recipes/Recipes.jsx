/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = ({ recipe }) => {
    const [disabled, setDisabled] = useState(false);
    const { name, method, rating, ingredients } = recipe;

    const notify = () => {
        toast('the recipe is your favorite ');
        setDisabled(true);
    };
    return (
        <div className="mb-4">
            <CardGroup>
                <Card className="border-info">
                    <Card.Body className="p-5">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <span className=" border bg-info text-white rounded mt-4 p-2 w-50 d-block fw-semibold">
                                Ingredients
                            </span>
                            {
                                // eslint-disable-next-line react/jsx-key
                                ingredients.map((i, index) => (
                                    <li key={index}>{i}</li>
                                ))
                            }
                        </Card.Text>
                        <Card.Text>
                            <span className="border bg-info text-white rounded mt-4 p-2 w-50 d-block fw-semibold">
                               Cooking Method
                            </span>
                            <p>{method}</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between">
                        <div className="flex-grow-1 d-flex align-items-center">
                            <Rating
                                style={{ maxWidth: 150 }}
                                value={Math.round(rating || 0)}
                                readOnly
                            />
                            <span className="ms-2 fw-semibold fs-4">
                               
                                {rating}
                            </span>
                        </div>

                        <Button
                            variant="info"

                            className="fw-semibold text-white"
                            onClick={notify}
                            disabled={disabled}
                        >
                            Favorite
                        </Button>
                        <ToastContainer></ToastContainer>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Recipes;
