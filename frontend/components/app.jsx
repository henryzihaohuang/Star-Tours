import React from 'react';
import Splash from './splash/Splash';
import Dashboard from './dashboard/Dashboard';
import Character from './characters/Character';
import NavBar from  './navbar/NavBar';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/routeUtil';
import { useSelector } from "react-redux";

const App = ({state}) => {
    const currentUser = useSelector((state) => state.session.currentUser);
    const navbar = currentUser ? <NavBar /> : '' ;
    return (
        <div>
            {navbar}
            <Switch>
                <AuthRoute exact path="/" component={Splash} />
                <ProtectedRoute exact path="/people" component={Dashboard} />
                <ProtectedRoute exact path="/character/:character" component={Character} />
            </Switch>
        </div>
    );
};

export default App;