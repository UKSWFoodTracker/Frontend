import axios from 'axios';
import setAuthToken from '../utils/set_auth_token';
import jwt_decode from 'jwt-decode';
import {toastr} from 'react-redux-toastr';

import { GET_ERRORS, SET_USER } from './types';
import { API } from '../routes/Api';

// Register user
export const registerUser = ( userData, history ) => dispatch => {
    axios
      .post(`${API}/Users/register`, userData)
      .then( () => history.push('/login'))
      .then(() => toastr.success("Pomyślnie zarejestrowano nowego użytkownika."))
      .catch( err => {
        toastr.error("Błednie wprowadzony dane.")
        dispatch({
            type: GET_ERRORS,
            payload: err.response
        })}
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
      .then(() => toastr.success("Pomyślnie zalogowano."))
      .catch( err => {
          toastr.error("Błednie wprowadzony dane.")
          dispatch({
              type: GET_ERRORS,
              payload: err.response
          })}
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
  
