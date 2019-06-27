import {CREATE_USER} from "./actionTypes";
import {VIEW_USER} from "./actionTypes";

export function createUsuario(request) {
    return function (dispatch, getState){
        fetch("http://localhost:9090/SmartDiet/Usuario",{
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
            .then(async response=>{
                return Object.assign({}, {error: !response.ok}, await response.json());
            })
            .then(jsonData => {
                dispatch(setCreateUsuarios(jsonData))
            })

    };

}
export function setCreateUsuarios(createResult) {
    return {
        type: CREATE_USER,
        createResult
    }
}

