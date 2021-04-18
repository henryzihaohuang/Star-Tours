import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profile from './Profile'
import CharacterList from './CharacterList';

function Dashboard (){
    return(
        <section className="dashboard-container">
            <div className="dashboard-subcontainer">
                <Profile />

                <CharacterList />
            </div>
        </section>
    )
};

export default Dashboard;