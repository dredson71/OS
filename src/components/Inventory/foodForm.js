import React from 'react';
import {Button, ControlLabel, Form, FormControl, FormGroup, Modal,NavItem} from 'react-bootstrap';
import PropTypes from "prop-types";
import {createFoodDate} from '../../actions/foodActions';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {CREATE_FOODATE} from "../../actions/actionTypes";
import Calendar,{formatDate} from 'react-calendar';
class foodForm extends React.Component {

    initialState = {
        idusuario: 1,
        cantidad: 0,
        fecha: '',
        result: {
            error: false,
            message: '',
            display: false
        },
        datoAlimento: {
            iddatoalimento: 0
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

        if (nextProps.actionType === CREATE_FOODATE) {
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
    handleChange2(event) {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        this.setState({datoAlimento: {...this.state.datoAlimento, [fieldName]: fieldValue}})
    }

    handleSubmit() {

        this.props.createFoodDate(this.state);
    }

    handleHide() {
        this.setState({result: {display: false}});
    }

    render() {
        return (
            <div>
                <Form>
                <FormGroup>
                    <ControlLabel>Ingresa el ID deseado:</ControlLabel>{' '}
                    <FormControl name="iddatoalimento" type="text" value={this.state.datoAlimento.iddatoalimento}
                                 onChange={this.handleChange2.bind(this)}
                                 placeholder="Ingresa el ID"/>
                </FormGroup>

                    <FormGroup>
                        <ControlLabel>Fecha:</ControlLabel>{' '}
                        <FormControl name="fecha" type="text" value={this.state.fecha}
                                     onChange={this.handleChange.bind(this)}
                                     placeholder="(yyyy-mm-dd)"/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Ingresa la cantidad:</ControlLabel>{' '}
                        <FormControl name="cantidad" type="text" value={this.state.cantidad}
                                     onChange={this.handleChange.bind(this)}
                                     placeholder="Ingresa cantidad"/>
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
                <br/>
                <NavItem eventKey={1} componentClass={Link} href="/Form" to="/Form">
                                                      Tu alimento no se encuentra? Registralo
                                                      </NavItem>
                                                      <br/>
                                                       <NavItem eventKey={2} componentClass={Link} href="/DelForm" to="/DelForm">
                                                                                                            Eliminar alimento de la Base de Datos
                                                                                                             </NavItem>
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
    createFoodDate
};

export default connect(mapState, mapDispatch)(foodForm);