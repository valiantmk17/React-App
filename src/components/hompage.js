import React from 'react';
import "./loginform.css"
import { Link, useLocation } from 'react-router-dom';

export const HomePage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email');
  const password = queryParams.get('password');

  return (
    <div className='cover'>
      <div class="sticky-sm-top" >
        <h1>Info Login</h1>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <div class="sticky-sm-bottom" align='center'>
          <Link to='/'><button class="btn btn-primary">Back</button></Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;