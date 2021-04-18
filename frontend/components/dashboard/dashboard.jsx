import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profile from './Profile'
import CharacterList from './CharacterList';
import { logout } from "../../actions/sessionActions";
import Button from "react-bootstrap/Button";

function Dashboard (){
    return(
        <section className="dashboard-container">
            <div className="dashboard-subcontainer">
                <div>
                    <Profile />
                </div>
                <div>
                    <CharacterList />
                </div>
                <div>
                    <Button onClick={() => dispatch(logout()) className="logout-btn"}>LOGOUT</Button>
                </div>
            </div>
        </section>
    )
};

export default Dashboard;