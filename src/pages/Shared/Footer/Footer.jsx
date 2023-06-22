/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import {  FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        // position-fixed bottom-0 w-100
        <div className='bg-light border-top border-info py-3 position-relative left-0 bottom-0 w-100'>
            <h4 className='text-center'>Find us on</h4>
            <div className='text-center mb-2 mt-2'>
            <Link className='me-3 fw-bold text-decoration-none text-black' to = '#'><FaFacebook className='me-1 text-primary'></FaFacebook> Facebook</Link>
            <Link className='me-3 fw-bold text-decoration-none text-black' to = '#'><FaYoutube className='text-danger me-2'></FaYoutube>Youtube</Link>
            <Link className='text-decoration-none text-black fw-bold'  to = '#'><FaTwitter className='me-1 text-primary'></FaTwitter>Twitter</Link>
            </div>
            <h6 className='text-center'>&copy;Baburchi 2023</h6>
        </div>
    );
};

export default Footer;