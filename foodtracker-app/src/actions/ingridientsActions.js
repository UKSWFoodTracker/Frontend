import {
    GET_INGRIDIENTS,
    ADD_INGRIDIENT,
    DELETE_INGRIDIENT,
    GET_MEALS,
    LOADING_ON
} from './types';
import axios from 'axios';
import { API } from '../routes/Api';
import {toastr} from 'react-redux-toastr';

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
        .post(`${API}/meals`, meal)
        .then(() => dispatch(getMeals()))
        .then(() => toastr.success("Posiłek dodany pomyślnie"))
        .catch(err => console.error("error: ", err)
    )
    
}

export const deleteMeal = mealID => dispatch => {
    axios
        .delete(`${API}/meals/${mealID}`)
        .then(() => dispatch(getMeals()))
        .then(() => toastr.success("Posiłek usunięty pomyślnie"))
        .catch(err => console.error("error: ", err))
}

export const getMeals = () => dispatch => {
    dispatch(setLoading());
    axios
      .get(`${API}/meals`)
      .then( res => {
          dispatch({
              type: GET_MEALS,
              data: res
          })
      })
      .catch(err => console.error("Error: ", err))
}

export const setLoading = () => {
    return {
        type: LOADING_ON
    }
}


