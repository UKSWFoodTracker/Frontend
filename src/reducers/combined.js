import { combineReducers } from 'redux';
import ingridientsReducer from './ingridientsReducer';

export default combineReducers({
    ingr: ingridientsReducer
});