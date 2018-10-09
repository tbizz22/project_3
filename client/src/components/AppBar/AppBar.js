import React, { Component } from "react";
import API from "../../utils/API";
import MenuLogin from './MenuLogin'
import MenuButtons from './MenuButtons';





class NavBar extends Component {
    state = {
        login: 0,
        userid: null,

    }

    componentDidMount() {
        this.checkValidUser(this.state.userid);
    }

    checkValidUser = (id) => {
       if (this.state.userid === null) {

       } else {
        API.getUser(id)
        .then(res => 
            console.log(res))
       }
       
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo center"><i className="extra-large black-text material-icons">repeat</i></a>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <MenuButtons 
                            login = {this.state.login}
                            />
                        </ul>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="/"></a></li>
                            
                            <li> 
                                <MenuLogin 
                                login= {this.state.login}
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