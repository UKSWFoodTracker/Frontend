import { 
    GET_INGRIDIENTS, ADD_INGRIDIENT, DELETE_INGRIDIENT
} from '../actions/types';

const initialState = {
    ingridients: [],
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
        case DELETE_INGRIDIENT:
            return {
                ...state,
                ingridients: state.ingridients.filter(item => item.id !== action.delete)
            }
        default:
            return state;
    }
};