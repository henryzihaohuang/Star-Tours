import React from 'react';
import { useSelector } from 'react-redux'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Profile() {
    const currentUser = useSelector(state => state.currentUser);

    debugger;
    return(
        <Row className="profile-sidebar-container">
            <Col className="profile-sidebar-subcontainer">
                <div className="profile-sidebar">
                    <div className="profile-sidebar-elements">
                        <img src={currentUser.imageUrl} alt="current-user-profile-picture"/>
                        Name: {currentUser.firstName} + {currentUser.lastName}
                        E-mail: {currentUser.email}
                    </div>

                </div>
            </Col>
        </Row>
    )
};

export default Profile;