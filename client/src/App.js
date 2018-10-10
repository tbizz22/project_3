import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from './pages/home';
import NavBar from './components/AppBar';
import NoMatch from './pages/NoMatch';
import login from './pages/login';
import register from './pages/register';
import logout from './pages/logout';
import userprofile from './pages/userprofile';
import features from './pages/features';
import feature from './pages/feature';
import axios from 'axios'

class App extends Component {
    constructor() {
        super()
        this.state = {
            user: null,
            loggedIn: 0,
        }
        this.getUser = this.getUser.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.updateUser = this.updateUser.bind(this)
    }

    componentDidMount() {
        this.getUser()
    }

    updateUser(userObject) {
        this.setState({user:userObject})
    }



    getUser() {
        axios.get('/api/login').then(response => {
            console.log('Get user response: ')
            console.log(response.data)
            if (response.data.user) {
                console.log('Get User: There is a user saved in the server session: ')

                this.setState({
                    loggedIn: true,
                    username: response.data.user.username
                })
            } else {
                console.log('Get user: no user');
                this.setState({
                    loggedIn: false,
                    username: null
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
                        />
                    </header>

                    <main>
                        <Switch>
                            <Route exact path='/' component={home} />
                            <Route exact path='/home' component={home} />
                            <Route exact path='/login' component={login} />
                            <Route exact path='/register' component={register} />
                            <Route exact path='/logout' component={logout} />
                            <Route exact path='/user/:id' component={userprofile} />
                            <Route exact path='/features' component={features} />
                            <Route exact path='/features/:id' component={feature} />
                            <Route component={NoMatch} />

                        </Switch>
                    </main>
                </div>
            </Router>
        )
    }
}



export default App;
