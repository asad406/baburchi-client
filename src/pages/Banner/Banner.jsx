/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

const Banner = () => {
    return (
        <Container>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-75"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="fw-bolder">
                        <h3 className="fs-1">Test delicious bangla Food</h3>
                        <p>
                            Here's some remarked Bangladesi Food from our high
                            qualified Baburchi
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-75"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="fw-bolder">
                        <h3 className="fs-1">Test delicious bangla Food</h3>
                        <p>
                            Here's some remarked Bangladesi Food from our high
                            qualified Baburchi
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block  w-100 h-75"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="fw-bolder">
                        <h3 className="fs-1">Test delicious bangla Food</h3>
                        <p>
                            Here's some remarked Bangladesi Food from our high
                            qualified Baburchi
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Banner;
