import {combineReducers} from 'redux';
import food from './food';
import exercise from './exercise';


export default combineReducers({
    exercise, food
});
