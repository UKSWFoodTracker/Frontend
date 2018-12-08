import axios from 'axios';
import setAuthToken from '../utils/set_auth_token';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_USER } from './types';
import { API } from '../routes/Api';

// Register user
export const registerUser = ( userData, history ) => dispatch => {
    axios
      .post(`${API}/Users/register`, userData)
      .then( () => history.push('/login'))
      .catch( err => 
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
      );
};

// Login - Get user token
export const loginUser = userData => dispatch => {
    axios
      .post(`${API}/Users/login`, userData)
      .then( res => {
          // save token in localStorage
          const { token } = res.data;
          localStorage.setItem('jwtToken', token);
          // set auth header
          setAuthToken(token);
          // decode token
          const decoded = jwt_decode(token);
          // set current user
          dispatch(setCurrentUser(decoded));
      })
      .catch( err => 
          dispatch({
              type: GET_ERRORS,
              payload: err.response.data
          })
      );
};

// Set logged in user
export const setCurrentUser = decoded => {
    return {
      type: SET_USER,
      payload: decoded
    };
};

// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
    // Redirect to login
    window.location.href = '/login';
};
  
