import React from 'react';
import Splash from './splash/Splash';
import Dashboard from './dashboard/Dashboard';
import { AuthRoute, ProtectedRoute } from '../utils/routeUtil';

const App = ({state}) => {
    return (
        <div>
            <AuthRoute exact path="/" component={Splash} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        </div>
    )
};

export default App;