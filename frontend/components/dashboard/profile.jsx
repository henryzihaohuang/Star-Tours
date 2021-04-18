import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { logout } from '../../actions/sessionActions';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Profile() {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.currentUser)

debugger;
    return(
        <Row className="profile-sidebar-container">
            <Col className="profile-sidebar-subcontainer">
                <Button onClick={()=> dispatch(logout())}>Logout</Button>
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