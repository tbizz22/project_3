import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Input, FormBtn } from '../../components/Form';
import API from "../../utils/API";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            userName: null,
            password: null,
            redirectTo: null
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        console.log('mounted');
    };


    handleInputChange = event => {
        console.log(event)
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();

    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className='container'>
                    <form>
                        <div className='row'>
                            <div className='input-field col s12'>
                                <Input
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                    name="userName"
                                    placeholder="Username (required)"
                                />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='input-field col s12'>
                                <Input
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                    name="password"
                                    placeholder="Password (required)"
                                    type="password"
                                />
                            </div>
                        </div>

                        <div className='row'>
                            <FormBtn
                                disabled={!(this.state.userName && this.state.password)}
                                onClick={this.handleFormSubmit}
                            >
                                Log in
                             </FormBtn>
                        </div>
                    </form>
                </div>
            );
        }
    };

}






export default Login;