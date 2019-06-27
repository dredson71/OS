import React from 'react'
import {createUsuario} from "../../actions/usuarioAction";
import {connect} from  'react-redux';
import usuarioForm from "./usuarioForm"
import {fetchFoodList} from "../../actions/foodActions";

class Usuario extends React.Component{


}

const mapState = state => {
    return {
        foodList: state.food.foodList ,
        actionType: state.food.actionType
    }
};

const mapDispatch = {
    fetchFoodList
};

export default connect(mapState, mapDispatch)(Usuario);