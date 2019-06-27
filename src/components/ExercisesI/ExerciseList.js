import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Form, Table,NavItem} from 'react-bootstrap';
import PropTypes from "prop-types";
import Calendar from 'react-calendar';

class ExerciseList extends React.Component {

    static propTypes = {
        exercises: PropTypes.array.isRequired
    };

    constructor(props) {

        super(props);
        this.state = {
            exercises: [],
        };
    }



    componentWillReceiveProps(nextProps) {

        if (nextProps.exercises) {
            this.setState({exercises: nextProps.exercises})
        }
    }

    render() {

        return (

            <div>
            <br/>
                <h4>Lista de ejercicios registradas :  </h4>


                <Table responsive hover>
                    <thead>
                    <tr>


                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Rutinas</th>
                        <th>Puntaje</th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.state.exercises.map((exercise, index) => (
                        <tr key={index}>
                            <td>{exercise.idpdejercicio}</td>
                            <td>{exercise.nombre}</td>
                            <td>{exercise.descripcion}</td>
                            <td>{exercise.rutinas}</td>
                            <td>{exercise.puntaje}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>

            </div>

        )
    }
}

export default ExerciseList;