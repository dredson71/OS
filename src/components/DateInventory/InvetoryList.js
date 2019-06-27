import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Form, Table, NavItem, ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import PropTypes from "prop-types";
import Calendar from 'react-calendar';
import {fetchFoodfecha} from "../../actions/foodActions";
import connect from "react-redux/es/connect/connect";

class InvetoryList extends React.Component {

    static propTypes = {
        foods: PropTypes.array.isRequired,
        afterSubmit:PropTypes.func
    };

    constructor(props) {

        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.state = {
            foods: [],
            fecha: '2018-11-17',
            dia:'17',
            mes:'11',
            anio:'2018'
        };

    }


    handleChange(event) {

        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        if (event.target.value === 0 ){
            fieldValue = 1
        }
        this.setState({...this.state, [fieldName]: fieldValue})

    }




    componentWillReceiveProps(nextProps) {


console.log(this.state.dia);
        this.props.fetchFoodfecha(this.state.anio+'-'+this.state.mes+'-'+this.state.dia);
        if (nextProps.foods) {
            this.setState({foods: nextProps.foods})


        }
    }

    render() {

        return (

            <div>
            <br/>
                <h4>Lista de comidas registradas segun fecha :  </h4><br/>
                <Form inline>
                <FormGroup>
                    <ControlLabel>Dia:</ControlLabel>{' '}
                    <FormControl name="dia" type="text" value={this.state.dia}
                                 onChange={this.handleChange.bind(this)}
                                 placeholder="(yyyy-mm-dd)"/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Mes:</ControlLabel>{' '}
                    <FormControl name="mes" type="text" value={this.state.mes}
                                 onChange={this.handleChange.bind(this)}
                                 placeholder="(yyyy-mm-dd)"/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Año:</ControlLabel>{' '}
                    <FormControl name="anio" type="text" value={this.state.anio}
                                 onChange={this.handleChange.bind(this)}
                                 placeholder="(yyyy-mm-dd)"/>
                </FormGroup>
                </Form>
                <Table responsive hover>
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Proteinas</th>
                        <th>Carbohidratos</th>
                        <th>Grasas</th>
                        <th>Cantidad</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.foods.map((food, index) => (
                        <tr key={index}>
                            <td>{food.datoAlimento.nombre}</td>
                            <td>{food.datoAlimento.proteina}</td>
                            <td>{food.datoAlimento.carbohidratos}</td>
                            <td>{food.datoAlimento.grasas}</td>
                            <td>{food.cantidad}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                 <NavItem eventKey={1} componentClass={Link} href="/Food" to="/Food">
                                      Agregar alimentos
                                      </NavItem>


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

export default connect(mapState, mapDispatch)(InvetoryList);