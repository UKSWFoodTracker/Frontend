import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr'
import ingridientsReducer from './ingridientsReducer';
import authReducer from './authReducer';

export default combineReducers({
    ingr: ingridientsReducer,
    auth: authReducer,
    toastr: toastrReducer
});