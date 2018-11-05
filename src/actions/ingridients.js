import {
    GET_INGRIDIENTS
} from './types';

export const getIngridients = (ingridient) => {
    return {
        type: GET_INGRIDIENTS,
        ingridient: ingridient
    }
}