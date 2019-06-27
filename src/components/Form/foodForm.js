import React from 'react';
import {Button, ControlLabel, Form, FormControl, FormGroup, Modal} from 'react-bootstrap';
import PropTypes from "prop-types";
import {createFood} from '../../actions/foodActions';
import {connect} from "react-redux";
import {CREATE_FOOD} from "../../actions/actionTypes";
import Calendar,{formatDate} from 'react-calendar';
class foodForm extends React.Component{

    initialState = {
        nombre: '',
        proteina: 0,
        carbohidratos: 0,
        grasas: 0,
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

        if (nextProps.actionType === CREATE_FOOD) {
            let result = nextProps.createResult;
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

        this.props.createFood(this.state);
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
                        <FormControl name="nombre" type="text" value={this.state.nombre}
                                     onChange={this.handleChange.bind(this)}
                                     placeholder="Ingresa el nombre"/>
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>Proteina(g):</ControlLabel>{' '}
                        <FormControl name="proteina" type="text" value={this.state.proteina}
                                     onChange={this.handleChange.bind(this)}
                                     placeholder="Enter an protein food"/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Carbohidratos(kcal):</ControlLabel>{' '}
                        <FormControl name="carbohidratos" type="text" value={this.state.carbohidratos}
                                     onChange={this.handleChange.bind(this)}
                                     placeholder="Ingresar carbohidratos"/>
                    </FormGroup>
                      <FormGroup>
                          <ControlLabel>Grasas(g):</ControlLabel>{' '}
                          <FormControl name="grasas" type="text" value={this.state.grasas}
                                       onChange={this.handleChange.bind(this)}
                                       placeholder="Enter an idUsuario"/>
                      </FormGroup>




                    <Button onClick={this.handleSubmit}>Agregar</Button>
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
        createResult: state.food.createResult || {},
        actionType: state.food.actionType
    }
};

const mapDispatch = {
    createFood
};

export default connect(mapState, mapDispatch)(foodForm);