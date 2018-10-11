import React, { Component } from "react";
import API from "../../utils/API";
import MenuLogin from './MenuLogin'
import MenuButtons from './MenuButtons';





class NavBar extends Component {



    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo center"><i className="extra-large black-text material-icons">repeat</i></a>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <MenuButtons 
                            login = {this.props.loggedIn}
                            />
                        </ul>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="/"></a></li>
                            
                            <li> 
                                <MenuLogin                                 
                                logout = {this.props.logout}
                                login = {this.props.loggedIn}
                                
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