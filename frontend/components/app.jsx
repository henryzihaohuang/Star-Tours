import React from 'react';
import LoginPage from './splash/LoginPage';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/routeUtil';


const App = () => {
    return (
        <div>
            <Route exact path="/" component={LoginPage} />
            <AuthRoute exact path="/login" component={LoginPage} />
        </div>
    )
};

export default App;