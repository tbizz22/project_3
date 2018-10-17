import React, { Component } from 'react';
import { Input, FormBtn } from '../../components/Form';
import { Redirect } from 'react-router-dom'
import API from "../../utils/API";
import Notifications, { notify } from 'react-notify-toast';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
const toastColor = {
    background: '#505050',
    text: '#fff'
}


class Register extends Component {
    state = {
        userName: null,
        password: null,
        firstName: null,
        lastName: null,
        email: null,
        role: 'none',
        redirectTo: null,
        confirmPassword: null
    };


    componentDidMount() {

    };

    toast = notify.createShowQueue();

    handleInputChange = event => {
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
        }).then(res => {
            this.setState({
                redirectTo: '/login'
            })
        }).catch(error => {
            this.toast(error.message, 'custom', 2000, toastColor)
        })


    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div>
                    <Notifications />
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
                                    <h6>Role: </h6>
                                    <Select
                                        value={this.state.role}
                                        onChange={this.handleInputChange}
                                        inputProps={{
                                            name: 'role',
                                            id: 'role',
                                        }}
                                        fullWidth

                                    >   <MenuItem value={'none'} disabled>
                                            Choose an Option
                                        </MenuItem>
                                        <MenuItem value={'Help Desk'}>Help Desk</MenuItem>
                                        <MenuItem value={'Account Manager'}>Account Manager</MenuItem>
                                        <MenuItem value={'Sales'}>Sales</MenuItem>
                                        <MenuItem value={'Technology'}>Technology</MenuItem>
                                        <MenuItem value={'Other'}>Other</MenuItem>
                                        <MenuItem value={'admin'}>admin</MenuItem>

                                    </Select>
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