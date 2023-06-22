/* eslint-disable no-unused-vars */
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Blog from '../pages/Blog/Blog';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Login from '../pages/Login/Login/Login';
import Register from '../pages/Login/Register/Register';
import Home from '../pages/Home/Home/Home';
import ChefRecipes from '../pages/ChefRecipes/ChefRecipes';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
    /*  {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>,
            },
            {
                path: 'login',
                element: <Login></Login>,
            },
            {
                path: 'register',
                element: <Register></Register>,
            },
            {
                path: 'terms',
                element: <Terms></Terms>,
            },
        ],
    }, */
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://baburchi-server.vercel.app/'),
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: 'login',
                element: <Login></Login>,
            },
            {
                path: 'register',
                element: <Register></Register>,
            },
            {
                path: 'recipes/:id',
                element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
                loader: ({params}) => fetch(`https://baburchi-server.vercel.app/recipes/${params.id}`)
                
            }
        ],
    },
]);

// https://baburchi-server.vercel.app/

export default router;