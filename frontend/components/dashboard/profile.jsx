import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { logout } from '../../actions/sessionActions';
import Button from 'react-bootstrap/Button';
import LoadingSpinner from './LoadingSpinner';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Profile() {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.currentUser)

    if (!currentUser) return <LoadingSpinner />;
    return(
        <Row className="profile-sidebar-container">
            <Col className="profile-sidebar-subcontainer">

                <div className="profile-picture-container">
                    <img className="profile-picture" src="https://i.ibb.co/m90Gr5L/coollogo-com-29380706.png" alt="profile-neon-header" />
                </div>
                <div>
                    <Button onClick={()=> dispatch(logout())}>Logout</Button>
                </div>
                <div className="profile-sidebar">
                    <div className="profile-sidebar-elements">
                        <img src={`${currentUser.imageUrl}`} alt="current-user-profile-picture"/>
                        Name: {currentUser.firstName} {currentUser.lastName}
                        E-mail: {currentUser.email}
                    </div>

                </div>
            </Col>
        </Row>
    )
};

export default Profile;