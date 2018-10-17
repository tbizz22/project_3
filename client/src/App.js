import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from './pages/home';
import NavBar from './components/AppBar';
import NoMatch from './pages/NoMatch';
import Login from './pages/login';
import register from './pages/register';
import logout from './pages/logout';
import UserProfile from './pages/userprofile';
import Features from './pages/features';
import Feature from './pages/feature';
import NewFeature from './pages/newfeature';
import axios from 'axios';
import API from '../src/utils/API';
import Preload from './components/preloader';


class App extends Component {
    constructor() {
        super()
        this.state = {
            userid: 1,
            userName: 'NoOne',
            role: 'Nothing',
            loggedIn: 0,
            loading: true
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


    }

    logout = (event) => {
        event.preventDefault()
        console.log('logging out')
        axios.post('/api/logout').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.setState({
                    loggedIn: false,
                    userName: '',
                    role: '',
                    userid: '',
                    loading: false
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
                    .then(res => {
                        this.setState({
                            userid: res.data._id,
                            userName: res.data.userName,
                            role: res.data.role,
                            loggedIn: 1,
                            loading: false
                        })
                    }
                    )
            } else {
                console.log('Get user: no user');
                this.setState({
                    loggedIn: false,
                    userName: '',
                    role: '',
                    userid: '',
                    loading: false
                })
            }
        })
    }




    render() {
        if (this.state.loading === true) {
            return <Preload />
        } else {

            return (
                <Router>
                    <div>
                        <header>
                            <NavBar
                                loggedIn={this.state.loggedIn}
                                logout={this.logout}
                                userid={this.state.userid}
                                role={this.state.role}
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
                                <Route exact path='/user/:id' render={(routeProps) => (
                                    <UserProfile {...routeProps}{...this.state} />
                                )}

                                />
                                <Route exact path='/features' render={(routeProps) => (
                                    <Features {...routeProps}{...this.state} />
                                )}
                                />
                                <Route exact path='/features/:id' render={(routeProps) => (
                                    <Feature {...routeProps}{...this.state} />
                                )}
                                />
                                <Route exact path='/newfeature' render={(routeProps) => (
                                    <NewFeature {...routeProps}{...this.state} />
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
}



export default App;
