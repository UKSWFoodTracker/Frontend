import {
    GET_INGRIDIENTS,
    ADD_INGRIDIENT
} from './types';

export const getIngridients = () => {
    return {
        type: GET_INGRIDIENTS
    }
}

export const addIngridient = ingridient => dispatch => {
    dispatch({
        type: ADD_INGRIDIENT,
        ingridient: ingridient
    })
}