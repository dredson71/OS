import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Form, Table,NavItem} from 'react-bootstrap';
import PropTypes from "prop-types";
import Calendar from 'react-calendar';

class InvetoryList extends React.Component {

    static propTypes = {
        foods: PropTypes.array.isRequired
    };

    constructor(props) {

        super(props);
        this.state = {
            foods: [],
            date: new Date(),
        };
    }



    componentWillReceiveProps(nextProps) {

        if (nextProps.foods) {
            this.setState({foods: nextProps.foods})
        }
    }

    render() {

        return (

            <div>
<br/>
                <h4> Alimentos de la Base de Datos </h4>
                  <br/>
                <Table responsive hover>
                    <thead>
                    <tr>


                        <th>ID</th>
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
                            <td>{food.iddatoalimento}</td>
                            <td>{food.nombre}</td>
                            <td>{food.proteina}</td>
                            <td>{food.carbohidratos}</td>
                            <td>{food.grasas}</td>
                            <td>{food.cantidad}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>


            </div>
        )
    }
}

export default InvetoryList;