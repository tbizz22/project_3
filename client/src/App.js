import React from 'react';
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




const App = () => (
    <Router>
        <div>
            <header>
                <NavBar />
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
export default App;
