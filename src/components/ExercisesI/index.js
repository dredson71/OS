import React from 'react';
import ExerciseList from "./ExerciseList";

import {fetchExerciseList} from '../../actions/exerciseActions';
import {connect} from "react-redux";
import {VIEW_EXERCISE_LIST} from "../../actions/actionTypes";


class ExercisesI extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            exercises: []
        }
    }

    componentDidMount() {

        this.props.fetchExerciseList();
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.actionType === VIEW_EXERCISE_LIST) {
            this.setState({exercises: nextProps.exerciseList});
        }
    }

    render() {

        return (
            <div>
                <ExerciseList exercises={this.state.exercises}/>

            </div>
        )
    }
}

const mapState = state => {
    return {
        exerciseList: state.exercise.exerciseList ,
        actionType: state.exercise.actionType
    }
};

const mapDispatch = {
    fetchExerciseList
};

export default connect(mapState, mapDispatch)(ExercisesI);