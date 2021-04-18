import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profile from './Profile'

function Dashboard (){
    return(
        <section className="dashboard-container">
            <div className="dashboard-subcontainer">
                <Profile />
            </div>
        </section>
    )
};

export default Dashboard;