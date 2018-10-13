import React, { Component } from 'react';
import { Input, FormBtn, Select } from '../../components/Form';
import { Redirect } from 'react-router-dom'
import API from "../../utils/API";


class Register extends Component {
    state = {
        userName: null,
        password: null,
        firstName: null,
        lastName: null,
        email: null,
        role: null,
        redirectTo: null
    };


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

        API.createUser({
            userName: this.state.userName,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            role: this.state.role
        })
            .then(res => this.setState({
                redirectTo: '/login'
            }))

    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div>
                    <div className='row'>
                        <h4 className='center-align'>Register</h4>
                    </div>

                    <div className='container'>
                        <form>
                            <div className='row'>
                                <div className='input-field col s12'>
                                    <Input
                                        value={this.state.title}
                                        onChange={this.handleInputChange}
                                        name="firstName"
                                        placeholder="First Name (required)"
                                    />
                                </div>
                                <div className='input-field col s12'>
                                    <Input
                                        value={this.state.title}
                                        onChange={this.handleInputChange}
                                        name="lastName"
                                        placeholder="Last Name (required)"
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-field col s12'>
                                    <Input
                                        value={this.state.title}
                                        onChange={this.handleInputChange}
                                        name="email"
                                        placeholder="Email (required)"
                                        type="email"
                                    />
                                </div>
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
                                <div className='input-field col s12'>
                                    <Input
                                        value={this.state.title}
                                        onChange={this.handleInputChange}
                                        name="confirmPassword"
                                        placeholder="Confirm Password (required)"
                                        type="password"
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-field col s12'>
                                    <Select
                                        value={this.state.value}
                                        onChange={this.handleInputChange}
                                        name="role"
                                        placeholder="role (required)"
                                    />
                                </div>
                            </div>

                            <FormBtn
                                // disabled={!(this.state.author && this.state.title)}
                                onClick={this.handleFormSubmit}
                            >
                                Register
                            </FormBtn>
                        </form>
                    </div>
                </div>
            )
        }
    }

}

export default Register;