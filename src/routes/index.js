import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import FormPage from './FormPage';
import DateFoodPage from './DateFoodPage';
import './main.css';
import FoodsPage from "./FoodsPage";
import ExercicePage from "./ExercisePage";
import UsuarioPage from "./UsuarioPage"
import DelFormPage from "./DelFormPage"

const Routes = () => (
    <Router>
        <div className="main_container">
            <Route exact path="/" component={HomePage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/Food" component={FoodsPage}/>
            <Route path="/Form" component={FormPage}/>
            <Route path="/DateFood" component={DateFoodPage}/>
            <Route path="/DelForm" component={DelFormPage}/>
            <Route path="/Exercise" component={ExercicePage}/>
            <Route path="/Usuario" component={UsuarioPage}/>
        </div>
    </Router>
);

export default Routes;