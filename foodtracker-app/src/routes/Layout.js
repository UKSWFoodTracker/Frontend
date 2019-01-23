import { Route, Redirect, Switch } from 'react-router-dom'
import React from 'react';
import ReduxToastr from 'react-redux-toastr'

import NotFound from './NotFound';
import Navbar from '../components/layout/Navbar';
import Dashboard from '../components/Dashboard';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';

const Layout = () => (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <main>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-left"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
        <div className="container">
        <Switch>
            {/* Dashboard */}
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            {/* Auth */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            {/* not found */}
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
        </Switch>
        </div>
      </main>
        {/* <Footer /> */}
    </div>
)

export default Layout;