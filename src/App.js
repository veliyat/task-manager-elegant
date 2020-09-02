import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import UserRoute from './routes/UserRoute'

import Header from './components/shared/Header/Header.jsx'
import Footer from './components/shared/Footer/Footer.jsx'
import TaskManager from './components/TaskManager/TaskManager.jsx'
import TaskDetail from './components/TaskManager/TaskDetail/TaskDetail.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import PageNotFound from './components/shared/PageNotFound/PageNotFound.jsx'

function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Header />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Switch>
                        <Route path="/" exact render={() => <Redirect to="/login" />} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <UserRoute path="/tasks" exact component={TaskManager} />
                        <UserRoute path="/tasks/:id" component={TaskDetail} />
                        <Route path="/**" component={PageNotFound} />
                    </Switch>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;
