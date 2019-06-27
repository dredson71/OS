import {VIEW_EXERCISE_LIST} from './actionTypes';

export function fetchExerciseList() {


    return function (dispatch, getState) {


        fetch("http://localhost:9090/SmartDiet/Ejercicio")

            .then(response => response.json())

            .then(jsonData => {

                dispatch(setExerciseList(jsonData))
            })
    };


}

function setExerciseList(exerciseList) {

    return {
        type: VIEW_EXERCISE_LIST,
        exerciseList: exerciseList
    }
}
