import React, { Component } from 'react';
import AppRouter from './routes/AppRouter';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';

import store from './store';
import './styles/App.scss';
import setAuthToken from './utils/set_auth_token';
import {setCurrentUser, logoutUser} from './actions/authActions';
// Check for token
if (localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
  
    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
      // Redirect to login
      window.location.href = '/login';
    }
}


class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
  }
}

export default App;
