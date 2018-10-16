import React, { Component } from "react";
import MenuLogin from './MenuLogin'
import MenuButtons from './MenuButtons';
import './AppBar.css';





class NavBar extends Component {



    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper blue darken-4">
                        <a href="/" className="brand-logo center"><i className="extra-large black-text material-icons">repeat</i></a>
                        <ul id="nav-mobile" className="left hide-on-sm-and-down">
                            <MenuButtons 
                            login = {this.props.loggedIn}
                            user = {this.props.user}
                            />
                        </ul>
                        <ul id="nav-mobile" className="right hide-on-sm-and-down">        
                            <li> 
                                <MenuLogin                                 
                                logout = {this.props.logout}
                                login = {this.props.loggedIn}
                                user = {this.props.user}
                                
                                /> 
                            </li>
                        </ul>
                    </div>
                </nav>
            </div >
        )
    }
}
export default NavBar;