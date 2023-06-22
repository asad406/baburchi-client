/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { Card, Container, Spinner } from 'react-bootstrap';
import Recipes from '../Recipes/Recipes';
import { FaRegCalendarAlt, FaThumbsUp, FaUtensils } from 'react-icons/fa';

const ChefRecipes = () => {
    const recipes = useLoaderData();
    const [chef, setChef] = useState({});
    useEffect(() => {
        fetch(`https://baburchi-server.vercel.app/${recipes[0].id}`)
            .then((res) => res.json())
            .then((data) => setChef(data));
    }, []);
    const {
        chefName,
        yearsOfExperience,
        numberOfRecipes,
        likes,
        bio,
        chefPicture,
    } = chef;
   
    return (
        <Container>
            <div
                className="card mb-5 mx-auto border border-info "
                // style={{maxWidth: 740, Height: 700}}
            >
                <div className="row g-0">
                    <div className="col-md-6">
                        <img
                            src={chefPicture}
                            className="img-fluid rounded-start w-100"
                            alt="..."
                        />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="card-body">
                            <h5 className="card-title fs-1">{chefName}</h5>
                            <h6 className="border bg-info text-white rounded p-2">
                                Bio
                            </h6>
                            <p className="card-text fw-semibold ms-2">{bio}</p>
                            <h6 className="border bg-info text-white p-2 rounded">
                                Experience
                            </h6>
                            <p className="card-text fw-semibold ms-2">
                                <span className='fs-3 me-2'><FaRegCalendarAlt/></span>
                                {yearsOfExperience} Years
                            </p>
                            <h6 className="border bg-info text-white p-2 rounded">
                                Number of Recipes
                            </h6>
                            <p className="card-text fw-semibold ms-2">
                                <span className='fs-3 me-2'><FaUtensils/></span>
                                {numberOfRecipes} Recipes
                            </p>
                            <h6 className="border bg-info text-white p-2 rounded">
                                Likes
                            </h6>
                            <p className="card-text fw-semibold ms-2">
                                 <span className='fs-3 me-2'> <FaThumbsUp /></span> {likes}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='fw-bold fs-1 text-center my-4'>Recipes from <span className='text-info'>{chefName}</span></h1>
            <hr />
            {recipes.map((recipe) => (
                <Recipes
                    key={recipe.id_key}
                    recipe={recipe}
                ></Recipes>
            ))}
        </Container>
    );
};

export default ChefRecipes;
