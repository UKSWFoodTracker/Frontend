import React, {Component} from 'react';
import FloatButton from './common/FloatButton';

class Dashboard extends Component {

    render() {
        return(
            <div className="container mt-3">
               <h1>Dashboard</h1>
               <h4>Click + button to add a meal.</h4>
               <FloatButton />
            </div>
        )
    }
}

export default Dashboard;