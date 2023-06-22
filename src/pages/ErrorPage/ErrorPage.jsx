/* eslint-disable no-unused-vars */

import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import errorImg from '../../assets/err.jpg'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (    
      <div className='container mt-5'>
        <div className=' text-center'>
       <img src={errorImg} alt="error" />
          <h2 >
            <span >Error</span>
            {status || 404}
          </h2>
          <p>
            {error?.message}
          </p>
          <Link to='/' className='btn btn-primary'>
            Back to homepage
          </Link>
        </div>
      </div>
    
  )
}

export default ErrorPage
