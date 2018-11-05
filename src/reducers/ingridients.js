import { 
    GET_INGRIDIENTS
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
        default:
            return state;
    }
};