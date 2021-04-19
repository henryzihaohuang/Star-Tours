import React from 'react';
import Splash from './splash/Splash';
import Dashboard from './dashboard/Dashboard';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/routeUtil';

const App = ({state}) => {
    return (
        <div>
            <Switch>
                <AuthRoute exact path="/" component={Splash} />
                <ProtectedRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
        </div>
    )
};

export default App;