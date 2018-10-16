import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Input, FormBtn } from '../../components/Form';
import axios from 'axios';
import Notifications, {notify} from 'react-notify-toast';
const toastColor = { 
    background: '#505050', 
    text: '#fff' 
  }

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

    toast = notify.createShowQueue();

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        axios
            .post('/api/login', {
                username: this.state.userName,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    this.setState({
                        redirectTo: '/features'
                    })
                }
            }).catch(error => {              
                this.toast(error.message, 'custom', 2000, toastColor)
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className='container'>
                <Notifications />
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