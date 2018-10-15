import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from './pages/home';
import NavBar from './components/AppBar';
import NoMatch from './pages/NoMatch';
import Login from './pages/login';
import register from './pages/register';
import logout from './pages/logout';
import userprofile from './pages/userprofile';
import Features from './pages/features';
import Feature from './pages/feature';
import axios from 'axios';
import API from '../src/utils/API';

class App extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                _id:1,
                userName: 'NoOne',
                role: 'Nothing'
            },
            loggedIn: 0,
        }
        this.getUser = this.getUser.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.updateUser = this.updateUser.bind(this)
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        this.getUser()
    }

    updateUser(userObject) {
        this.setState({ user: userObject })
        this.setState({ loggedIn: 1 })
    }

    logout = (event) => {
        event.preventDefault()
        console.log('logging out')
        axios.post('/api/logout').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.setState({
                    loggedIn: false,
                    user: {
                        _id:1,
                        userName: 'NoOne',
                        role: 'Nothing'
                    }
                })
            }
        }).catch(error => {
            console.log('Logout error')
            console.log(error)
        })
    }




    getUser() {
        axios.get('/api/login').then(response => {
            console.log('Get user response: ')
            console.log(response.data)
            if (response.data.user) {
                console.log('Get User: There is a user saved in the server session: ')
                console.log("response.data.user" + JSON.stringify(response.data.user))
                API.getUser(response.data.user._id)
                    .then(res => this.updateUser(res.data)
                    )
            } else {
                console.log('Get user: no user');
                this.setState({
                    loggedIn: false,
                    user: null
                })
            }
        })
    }




    render() {
        return (
            <Router>
                <div>
                    <header>
                        <NavBar
                            loggedIn={this.state.loggedIn}
                            logout={this.logout}
                            user={this.state.user}
                        />
                    </header>

                    <main>
                        <Switch>
                            <Route exact path='/' component={home} />
                            <Route exact path='/home' component={home} />
                            <Route exact path='/login' render={(routeProps) => (
                                <Login {...routeProps} {...this.updateUser} />
                            )}
                            />
                            <Route exact path='/register' component={register} />
                            <Route exact path='/logout' component={logout} />
                            <Route exact path='/user/:id' component={userprofile} />
                            <Route exact path='/features' render={(routeProps) => (
                                <Features {...routeProps}{...this.state} />
                            )}
                            />
                            <Route exact path='/features/:id' render={(routeProps) => (
                                <Feature {...routeProps}{...this.state} />
                            )}   
                            />
                            <Route component={NoMatch} />

                        </Switch>
                    </main>
                </div>
            </Router>
        )
    }
}



export default App;
