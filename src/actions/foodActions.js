import {CREATE_FOOD, VIEW_FOODS_LIST,CREATE_FOODATE,VIEW_FOODS_FECHA,DELETE_FOOD} from './actionTypes';

export function fetchFoodList() {


        return function (dispatch, getState) {


            fetch("http://localhost:9090/SmartDiet/DatoAlimento")

                .then(response => response.json())

                .then(jsonData => {
                    dispatch(setFoodList(jsonData))
                })
        };
}

function setFoodList(foodList) {

    return {
        type: VIEW_FOODS_LIST,
        foodList: foodList
    }
}

export function deleteData(id) {


        return function (dispatch, getState) {


            fetch("http://localhost:9090/SmartDiet/DatoAlimento/"+id,
            {
                method:'delete',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify()
            })
            .then(response => response.json()
            )
                .then(jsonData => {
                             dispatch(setDeleteFood(jsonData))
                         })
        };
}

export function setDeleteFood(deleteResult) {

    return {
        type: DELETE_FOOD,
        deleteResult
    }
}


export function createFood(request) {

    return function (dispatch, getState) {
        fetch('http://localhost:9090/SmartDiet/DatoAlimento', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
            .then(async response => {
                return Object.assign({}, {error: !response.ok}, await response.json());
            })
            .then(jsonData => {

                dispatch(setCreateFood(jsonData))
            })
    };
}

export function setCreateFood(createResult) {

    return {
        type: CREATE_FOOD,
        createResult
    }
}

export function createFoodDate(request) {

    return function (dispatch, getState) {
        fetch('http://localhost:9090/SmartDiet/Alimento', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
            .then(async response => {
                return Object.assign({}, {error: !response.ok}, await response.json());
            })
            .then(jsonData => {

                dispatch(setCreateFoodDate(jsonData))
            })
    };
}

export function setCreateFoodDate(createResultD) {

    return {
        type: CREATE_FOODATE,
        createResultD
    }
}
export function fetchFoodfecha(fecha) {


    return function (dispatch, getState) {


        fetch("http://localhost:9090/SmartDiet/Alimento/fecha/"+fecha)

            .then(response => response.json())

            .then(jsonData => {
                dispatch(setFoodFecha(jsonData))
            })
    };
}

function setFoodFecha(foodDate) {

    return {
        type: VIEW_FOODS_FECHA,
        foodDate: foodDate
    }
}
