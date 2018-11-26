import React from 'react';
import uuid from 'uuid';

const MealItem = (props) => {
    return (
        <div>
            {props.data.map(item => (
                <div id="meal" className="container" key={uuid()}>
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
                                {item.ingredients.map( ingredient => (
                                    <tr key={uuid()}>
                                        <td>{ingredient.name}</td>
                                        <td>{ingredient.calories}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                </div>
            ))}
        </div>
    )
}


export default MealItem;