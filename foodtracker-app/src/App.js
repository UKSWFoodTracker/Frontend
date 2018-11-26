import React, { Component } from 'react';
import AppRouter from './routes/AppRouter';
import { Provider } from 'react-redux';

import store from './store';
import './styles/App.scss';


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
