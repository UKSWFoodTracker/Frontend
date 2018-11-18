import {
    GET_INGRIDIENTS,
    ADD_INGRIDIENT,
    DELETE_INGRIDIENT
} from './types';
import axios from 'axios';
import { API } from '../routes/Api';

export const getIngridients = () => {
    return {
        type: GET_INGRIDIENTS
    }
}

export const deleteIngridient = (id) => ({
    type: DELETE_INGRIDIENT,
    delete: id.itemId
})


export const addIngridient = ingridient => dispatch => {
    dispatch({
        type: ADD_INGRIDIENT,
        ingridient
    })
}

export const postMeal = meal => dispatch => {
    axios
        .post(`${API}/meals/add`, meal)
        .then(res => console.log(res))
        .catch(err => console.log("error: ", err)
    )
    
}

    

