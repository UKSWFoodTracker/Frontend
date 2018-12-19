import React from 'react';
import uuid from 'uuid';
import {connect} from 'react-redux';
import { deleteMeal } from '../../actions/ingridientsActions';
import EditMeal from './EditMeal';


const MealItem = (props) => {
    return (
        <div>
            {props.data.map(item => {
                let sumCalories = 0;
                return (
                <div id="meal" className="container" key={uuid()}>
                    <button className="btn btn-outline-danger btn-sm float-right mt-1 ml-2"
                        onClick={() => props.deleteMeal(item.id) }
                    >Delete</button>
                    <EditMeal data={item}/>
                    <h3>{item.name}</h3>
                    <hr />
                        <div>
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Ingredient</th>
                                        <th scope="col">Calories</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {item.ingredients.map( ingredient => {
                                    sumCalories = sumCalories + ingredient.calories;
                                    return (
                                    <tr key={uuid()}>
                                        <td>{ingredient.name}</td>
                                        <td>{ingredient.calories}</td>
                                    </tr>
                                )})}
                                    <tr key={uuid()}>
                                        <td ><b>total calories</b></td>
                                        <td><b>{sumCalories}</b></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </div>
            )})}
        </div>
    )
}

const mapStateToProps = state => ({
    ingr: state.ingr
});

export default connect(mapStateToProps, { deleteMeal })(MealItem);