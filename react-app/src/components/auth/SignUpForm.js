import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';


import './SignUpForm.css';
import jordanbox from '../../pictures/jordanbox.jpg'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstName, lastName, username, email, password));
      if (data) {
        setErrors(data)
      }
    }else{
      setErrors(['Passwords do not match'])
    }

  };


  const updateFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const updateLastName = (e) => {
    setLastName(e.target.value)
  }

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp}>
      <img src={jordanbox} className='jordanpic'></img>
      <div className='signup-div'>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div id='signup-entry'>
        <label id='signup-entry'>First Name</label>
        <input id='text-form'
          type='text'
          name='firstname'
          onChange={updateFirstName}
          value={firstName}
        ></input>
      </div>
      <div id='signup-entry'>
        <label id='signup-entry'>Last Name</label>
        <input id='text-form'
          type='text'
          name='lastname'
          onChange={updateLastName}
          value={lastName}
        ></input>
      </div>
      <div id='signup-entry'>
        <label id='signup-entry'>User Name</label>
        <input id='text-form'
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div id='signup-entry'>
        <label id='signup-entry'>Email</label>
        <input id='text-form'
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label id='signup-entry'>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div id='signup-entry'>
        <label id='signup-entry'>Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div >
      <button type='submit'>Sign Up</button>
      </div>
    </form>
  );
};

export default SignUpForm;
