import React from 'react';
import { useDispatch, } from 'react-redux';
import { NavLink } from 'react-router-dom';


import LoginForm from '../auth/LoginForm';
import "./SplashPage.css"

const SplashPage = props => {
  const dispatch = useDispatch()

  return (
    <>
      <div className="splash-main">
        <h1 className='splash-title'>Outfitter</h1>
        <h2 className='splash-bio'> Fashion/Sneakers/Streetwear </h2>
        <LoginForm  className='splash-login'/>
        <div className='splash-signup'>
          Don't have an account?&nbsp;
          <NavLink to='/sign-up' exact={true} className='splash-signup-button' activeClassName='active'>
            Sign Up
          </NavLink>
        </div>
      </div>

    </>
  )
};


export default SplashPage;
