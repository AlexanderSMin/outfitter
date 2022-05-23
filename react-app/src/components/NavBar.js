import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import "./NavBar.css";
// import favicon from '../../public/favicon-32x32.png'

const NavBar = () => {
  const user = useSelector((state) => state.session.user);

  return (
    <nav>
      <ul>
        {!user && (
          <>
            <li id="logo">OUTFITTER</li>
            <li id='blackout'>
              <NavLink to="/" exact={true} id='nav-button' activeClassName="active">
                Home
              </NavLink>
            </li>
            <li id='blackout'>
              <NavLink to="/sign-up" exact={true} id='nav-button' activeClassName="active">
                Sign Up
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li id="logo">OUTFITTER</li>
            {/* <li>
              <NavLink to='/users' exact={true} activeClassName='active'>
                Users
              </NavLink>
            </li> */}
            <li id='blackout'>
              <NavLink to="/" exact={true} id='nav-button' activeClassName="active">
                Home
              </NavLink>
            </li>
            <li id='blackout'>
              <LogoutButton className='navbar-logout' />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
