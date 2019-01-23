import React, {Component} from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { getMeals } from '../actions/ingridientsActions';
import FloatButton from './common/FloatButton';
import MealItem from './meals/MealItem';
import PaperSheet from './Papers/Calories';
import WeekPaper from './Papers/CaloriesWeek';
import CaloriesMonth from './Papers/CaloriesMonth';

class Dashboard extends Component {

    componentDidMount() {
        this.props.getMeals();
    }

    render() {
        const meals = this.props.ingr.meals.data || [];

        const HelloUser = (
            <div>
                <h1>Dashboard</h1>
                <h4>Naciśnij guzik + aby dodać posiłek.</h4>
            </div>
        );

        return(
            <div className="container mt-3">
                <div id="paper-grid">
                    <Grid container justify="space-evenly" alignItems="center" spacing={24}>
                        <Grid item md={4} xs={"auto"} >
                            <PaperSheet data={meals} />
                        </Grid>
                        <Grid item md={4} xs={"auto"} >
                            <WeekPaper data={meals} />
                        </Grid>
                        <Grid item md={4} xs={"auto"} >
                            <CaloriesMonth data={meals} />
                        </Grid>
                    </Grid>    
                </div>
               {meals === undefined || meals.length !== 0 ? null : HelloUser}
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