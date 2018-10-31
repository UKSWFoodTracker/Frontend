import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './Layout';

const AppRouter = () => (
    <Router>
        <Layout />
    </Router>
);

export default AppRouter;