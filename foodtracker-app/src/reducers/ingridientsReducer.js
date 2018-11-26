import { 
    GET_INGRIDIENTS, ADD_INGRIDIENT, DELETE_INGRIDIENT, GET_MEALS, LOADING_ON
} from '../actions/types';

const initialState = {
    ingridients: [],
    meals: [],
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
        case GET_MEALS:
            return {
                ...state,
                meals: action.data,
                loading: false
            }
        case DELETE_INGRIDIENT:
            return {
                ...state,
                ingridients: state.ingridients.filter(item => item.id !== action.delete)
            }
        case LOADING_ON:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
};