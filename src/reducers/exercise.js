import {VIEW_EXERCISE_LIST} from '../actions/actionTypes';

export default function exercise (state = {}, action) {
    switch (action.type) {
        case VIEW_EXERCISE_LIST:
            return Object.assign({}, state, {
                actionType: action.type,
                exerciseList: action.exerciseList,
                error: false
            });


        default:
            return state;
    }
}