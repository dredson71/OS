import React from 'react';
import {Button, ControlLabel, Form, FormControl, FormGroup, Modal} from 'react-bootstrap';
import PropTypes from "prop-types";
import {createUsuario} from "../../actions/usuarioAction";
import {connect} from "react-redux"
import {CREATE_USER} from "../../actions/actionTypes";

class usuarioForm extends React.Component
{
    initialState = {
        Peso: 0,
        Altura:0,
        IMC: 0,
        Edad: 0,
        ActividadFisicaTotal: '',
        usuario: 1,
        result: {
            error: false,
            message: '',
            display: false
        }
    };

    constructor(props){
        super(props);
        this.state = this.initialState;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleHide = this.handleHide.bind(this);

    }
    static propTypes = {
        afterSubmit: PropTypes.func
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.actionType === CREATE_USER)
        {
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
                state = Object.assign(this.initialState, {result: {display: true, message: 'Enviado Correctamente'}});
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

        this.props.createUsuario(this.state);
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
                        <ControlLabel>Peso(Kg):</ControlLabel>{' '}
                        <FormControl name="Peso" type="text" value={this.state.Peso}
                                     onChange={this.handleChange.bind(this)}
                                     placeholder="Ingresa tu peso"/>
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>Altura (cm)):</ControlLabel>{' '}
                        <FormControl name="Altura" type="text" value={this.state.Altura}
                                     onChange={this.handleChange.bind(this)}
                                     placeholder="Ingresa tu altura"/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Indice de masa corporal(Kg/m2):</ControlLabel>{' '}
                        <FormControl name="IMC" type="text" value={this.state.IMC}
                                     onChange={this.handleChange.bind(this)}
                                     placeholder="Ingresa el indice de masa corporal"/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Edad:</ControlLabel>{' '}
                        <FormControl name="Edad" type="text" value={this.state.Edad}
                                     onChange={this.handleChange.bind(this)}
                                     placeholder="Enter an idUsuario"/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Actividad Fisica:</ControlLabel>{' '}
                        <FormControl name="ActividadFisicaTotal" type="text" value={this.state.ActividadFisicaTotal}
                                     onChange={this.handleChange.bind(this)}
                                     placeholder="Ingrese la actividad fisica"/>
                    </FormGroup>


                    <Button onClick={this.handleSubmit}>Enviar</Button>
                </Form>
                <Modal bsSize="small" show={this.state.result.display}>
                    <Modal.Body>
                        <h4>{this.state.result.error ? 'Error!' : 'Hecho!'}</h4>
                        <p>
                            {this.state.result.message}
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button href="/Food" onClick={this.handleHide}>Hecho</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
const mapState = state => {
    return {
        createResult: state.usuario.createResult || {},
        actionType: state.usuario.actionType
    }
}

const mapDispatch = {
    createUsuario
};

export default connect(mapState, mapDispatch)(usuarioForm)