import {CREATE_FOOD, VIEW_FOODS_LIST, CREATE_FOODATE, VIEW_FOODS_FECHA,DELETE_FOOD} from '../actions/actionTypes';

export default function food(state = {}, action) {
    switch (action.type) {
        case VIEW_FOODS_LIST:
            return Object.assign({}, state, {
                actionType: action.type,
                foodList: action.foodList,
                error: false
            });

        case CREATE_FOOD:
            return Object.assign({}, state, {
                actionType: action.type,
                createResult: action.createResult,
                error: false
            });
         case CREATE_FOODATE:
                    return Object.assign({}, state, {
                        actionType: action.type,
                        createResultD: action.createResultD,
                        error: false
                    });
        case VIEW_FOODS_FECHA:
            return Object.assign({}, state, {
                actionType: action.type,
                foodDate: action.foodDate,
                error: false
            });
        case DELETE_FOOD:
                    return Object.assign({}, state, {
                        actionType: action.type,
                        deleteResult: action.deleteResult,
                        error: false
                    });
        default:
            return state;
    }
}