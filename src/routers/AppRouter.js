import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import React from 'react';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/loginPage';
import DashboardPage from '../components/dashboardPage';
import HelpPage from '../components/helpPage';
import NotFoundPage from '../components/notfoundPage';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
    <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}/>   
        <PrivateRoute path="/dashboard" component={DashboardPage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage}/>
    </Switch>
    </div>
    </Router>
)

export default AppRouter;
