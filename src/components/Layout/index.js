import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

import Header from '../Header';
import './Layout.css';



class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuExpanded: true
        }
        this.changeMenuSate = this.changeMenuSate.bind(this);
    }

    changeMenuSate() {
        this.setState({menuExpanded: !this.state.menuExpanded});
    }

    render() {
        let menu_expanded_class = this.state.menuExpanded ? "side_menu_expanded" : "side_menu_collapsed";
        return (
            <div className={`App side_menu_active ${menu_expanded_class}`}>
                <Header/>


                <div id="main_wrapper">
                    <div className="container-fluid">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }

}

export default Layout;