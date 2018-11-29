import { combineReducers } from 'redux';
import ingridientsReducer from './ingridientsReducer';
import authReducer from './authReducer';

export default combineReducers({
    ingr: ingridientsReducer,
    auth: authReducer
});