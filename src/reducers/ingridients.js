import { 
    GET_INGRIDIENTS, ADD_INGRIDIENT
} from '../actions/types';

const initialState = {
    ingridients: [{"dupa": 50}, {"koza": 500}, {"kebab": 90}],
    loading: false
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_INGRIDIENTS:
            return {
                ...state,
                ingridients: [...state.ingridients],
                loading: false
            } 
        case ADD_INGRIDIENT:
            return {
                ...state,
                ingridients: [...state.ingridients, action.ingridient],
                loading: false
            }
        default:
            return state;
    }
};