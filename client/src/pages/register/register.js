import React, { Component } from 'react';
import { Input, TextArea, FormBtn } from '../../components/Form';
import API from "../../utils/API";

class register extends Component {
    state = {
        foo: 'bar'
    };


    componentDidMount() {
        this.initSelect()
        console.log('mounted')

    };

    initSelect = () => {
        const elem = document.getElementById('roleSelect')

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();

        API.createUser({
            userName: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            role: ''
        })
            .then(res => this.setState({
                redirectTo: '/login'
            }))

    }

    render() {
        return (
            <div>
                <div className='row'>
                    <h4 className='center-align'>Register</h4>
                </div>

                <div className='container'>
                    <form>
                        <div className='row'>
                            <div className='input-field col s6'>
                                <Input
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                    name="firstName"
                                    placeholder="First Name (required)"
                                />
                            </div>
                            <div className='input-field col s6'>
                                <Input
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                    name="lastName"
                                    placeholder="Last Name (required)"
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='input-field col s6'>
                                <Input
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                    name="email"
                                    placeholder="Email (required)"
                                />
                            </div>
                            <div className="input-field col s6">
                                <select id='roleSelect'>
                                    <option value="" disabled selected>Choose your option</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                                <label>User Role</label>
                            </div>

                        </div>
                        <div className='row'>
                            <div className='input-field col s6'>
                                <Input
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                    name="password"
                                    placeholder="Password (required)"
                                />
                            </div>
                            <div className='input-field col s6'>
                                <Input
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                    name="confirmPassword"
                                    placeholder="Confirm Password (required)"
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

export default register;