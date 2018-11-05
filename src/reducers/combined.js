import { combineReducers } from 'redux';
import ingridientsReducer from './ingridients';

export default combineReducers({
    ingr: ingridientsReducer
});