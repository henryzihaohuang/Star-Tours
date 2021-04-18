import React from 'react';
import Splash from './splash/Splash';
import Dashboard from './dashboard/Dashboard';
import { AuthRoute, ProtectedRoute } from '../utils/routeUtil';

const App = ({state}) => {
    return (
        <div>
            <AuthRoute path="/" component={Splash} />
            <ProtectedRoute path="/dashboard" component={Dashboard}/>


        </div>
    )
};

export default App;