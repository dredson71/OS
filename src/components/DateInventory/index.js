import React from 'react';
import InvetoryList from "./InvetoryList";

import {fetchFoodfecha} from '../../actions/foodActions';
import {connect} from "react-redux";
import {VIEW_FOODS_FECHA} from "../../actions/actionTypes";


class Inventory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            foods: [],

        }

    }

    componentDidMount() {

            this.props.fetchFoodfecha('2018-11-17');
 }


    componentWillReceiveProps(nextProps) {

        if (nextProps.actionType === VIEW_FOODS_FECHA) {
            this.setState({foods: nextProps.foodDate});

        }
    }

    render() {


        return (
            <div>

                <InvetoryList foods ={this.state.foods}  />
            </div>
        )
    }
}

const mapState = state => {
    return {
        foodDate: state.food.foodDate ,
        actionType: state.food.actionType
    }
};

const mapDispatch = {
    fetchFoodfecha
};

export default connect(mapState, mapDispatch)(Inventory);