import React from 'react';
import {Button, ControlLabel, Form, FormControl, FormGroup, Modal} from 'react-bootstrap';
import PropTypes from "prop-types";
import {deleteData} from '../../actions/foodActions';
import {connect} from "react-redux";
import {DELETE_FOOD} from "../../actions/actionTypes";
import Calendar,{formatDate} from 'react-calendar';
class foodForm extends React.Component{

     initialState = {
            id: 3,
            result: {
                error: false,
                message: '',
                display: false
            }
        };

    constructor(props) {
        super(props);
         this.state = this.initialState;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }

    static propTypes = {

        afterSubmit: PropTypes.func
    };

    componentWillReceiveProps(nextProps) {

        if (nextProps.actionType === DELETE_FOOD) {
            this.props.deleteData(this.state.id);
            let result = nextProps.deleteResult;
            let state = {};

            if (result.error) {

                state = Object.assign(this.state, {
                    result: {
                        error: result.error,
                        message: result.message,
                        display: true
                    }
                });
                this.setState(state);
            } else {
                state = Object.assign(this.initialState, {result: {display: true, message: 'Create completed'}});
                this.setState(state);
                this.props.afterSubmit();
            }
        }
    }


    handleChange(event) {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        this.setState({...this.state, [fieldName]: fieldValue})
    }

    handleSubmit() {

        this.props.deleteData(this.state.id);
    }

    handleHide() {
        this.setState({result: {display: false}});
    }

    render() {
        return (
            <div>
                <h4>Create food:</h4>
                <Form>
                    <FormGroup>
                        <ControlLabel>Nombre:</ControlLabel>{' '}
                        <FormControl name="id" type="text" value={this.state.id}
                                     onChange={this.handleChange.bind(this)}
                                     placeholder="Ingresa el id"/>
                    </FormGroup>

                    <Button onClick={this.handleSubmit}>Eliminar</Button>
                </Form>
                <Modal bsSize="small" show={this.state.result.display}>
                    <Modal.Body>
                        <h4>{this.state.result.error ? 'Error!' : 'Done!'}</h4>
                        <p>
                            {this.state.result.message}
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button href="/Food" onClick={this.handleHide}>Done</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

const mapState = state => {
    return {
        deleteResult: state.food.deleteResult || {},
        actionType: state.food.actionType
    }
};

const mapDispatch = {
    deleteData
};

export default connect(mapState, mapDispatch)(foodForm);