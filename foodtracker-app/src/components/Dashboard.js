import React, {Component} from 'react';
import { connect } from 'react-redux';

import { getMeals } from '../actions/ingridientsActions';
import FloatButton from './common/FloatButton';
import MealItem from './meals/MealItem';

class Dashboard extends Component {

    componentDidMount() {
        this.props.getMeals();
    }

    render() {
        const meals = this.props.ingr.meals.data || [];
        const { loading } = this.props.ingr;

        return(
            <div className="container mt-3">
               <h1>Dashboard</h1>
               <h4>Click + button to add a meal.</h4>
               {meals === undefined ? null : <MealItem data={meals}/>}
               <FloatButton />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ingr: state.ingr
});
  
export default connect(mapStateToProps, { getMeals })(Dashboard);