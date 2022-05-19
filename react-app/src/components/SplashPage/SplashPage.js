import React from 'react';
import { useDispatch, } from 'react-redux';
import { NavLink } from 'react-router-dom';


import LoginForm from '../auth/LoginForm';

const SplashPage = props => {
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <h1>Outfitter</h1>
        <h2 > Fashion/Sneakers/Streetwear </h2>
        <LoginForm />
        <div className='bottom-signup'>
          Don't have an account?&nbsp;
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </div>
      </div>

    </>
  )
};


export default SplashPage;
