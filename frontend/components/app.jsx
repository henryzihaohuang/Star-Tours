import React from 'react';
import Splash from './splash/Splash';
import Dashboard from './dashboard/Dashboard';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/routeUtil';

const App = () => {
    return (
        <div>
            <Route exact path="/" component={Splash} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard}/>
        </div>
    )
};

export default App;