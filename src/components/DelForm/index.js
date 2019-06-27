import React from 'react';
import {deleteData} from '../../actions/foodActions';
import {connect} from "react-redux";
import {VIEW_FOODS_LIST} from "../../actions/actionTypes";
import FoodForm from "./foodForm";

class Inventory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            foods: []
        }
    }

    componentDidMount() {

        this.props.deleteData();
    }

    render() {
        return (
            <div>
                <FoodForm afterSubmit={this.props.deleteData(0)}/>

            </div>
        )
    }
}

const mapState = state => {
    return {
        foodList: state.food.foodList ,
        actionType: state.food.actionType
    }
};

const mapDispatch = {
    deleteData
};

export default connect(mapState, mapDispatch)(Inventory);