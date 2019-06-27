import React from 'react';
import {fetchFoodList} from '../../actions/foodActions';
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

        this.props.fetchFoodList();
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.actionType === VIEW_FOODS_LIST) {
            this.setState({foods: nextProps.foodList});
        }
    }

    render() {
        return (
            <div>
                <FoodForm afterSubmit={this.props.fetchFoodList}/>

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
    fetchFoodList
};

export default connect(mapState, mapDispatch)(Inventory);