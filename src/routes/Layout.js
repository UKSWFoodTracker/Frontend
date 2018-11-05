import { Route, Redirect, Switch } from 'react-router-dom'
import React from 'react';

import NotFound from './NotFound';
import Navbar from '../components/layout/Navbar';
import Dashboard from '../components/Dashboard';

const Layout = () => (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container">
        <Switch>
            {/* Dashboard */}
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
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