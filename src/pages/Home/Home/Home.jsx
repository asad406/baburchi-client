/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../../Banner/Banner';
import Chefs from '../Chefs/Chefs';
import NewRecipes from '../NewRecipes/NewRecipes';
import NewsLetter from '../NewsLetter/NewsLetter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <NewRecipes></NewRecipes>
            <NewsLetter></NewsLetter>
            
        </div>
    );
};

export default Home;
