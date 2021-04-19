import React from 'react';
import Splash from './splash/Splash';
import Dashboard from './dashboard/Dashboard';
import Favorites from './favorites/Favorites';
import Character from './characters/Character';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/routeUtil';


const App = ({state}) => {
    return (
        <div>
            <Switch>
                <AuthRoute exact path="/" component={Splash} />
                <ProtectedRoute exact path="/people" component={Dashboard} />
                <ProtectedRoute exact path="/favorites" component={Favorites} />
                <ProtectedRoute exact path="/character/:character_id" component={Character} />
            </Switch>
        </div>
    )
};

export default App;