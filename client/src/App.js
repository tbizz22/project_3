import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from './pages/home';
import logo from './logo.svg';
import Menu from '@material-ui/core/Menu';
import NavBar from './components/AppBar'
import NoMatch from './pages/NoMatch'
import login from './pages/login'



const App = () => (
    <Router>
        <div>
            <NavBar />
            <Switch>
                <Route exact path='/' component={home} />
                <Route exact path='/home' component={home} />
                <Route exact path='/login' component={login} />
                <Route component={NoMatch} />
            </Switch>

        </div>
    </Router>
)
export default App;
