import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";
import { fetchFavoriteCharacters } from '../../utils/swapiUtil';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Profile() {
  const currentUser = useSelector((state) => state.session.currentUser);
  const [favoriteCharacters, setfavoriteCharacters] = useState([])

  useEffect(() => {
    fetchFavoriteCharacters().then((favs) => {
      setfavoriteCharacters(favs);
    });
  }, []);

  if (!currentUser) return <LoadingSpinner />;
  return (
    <Row className="profile-sidebar-container">
      <Col className="profile-sidebar-subcontainer">
        <div className="profile-header">
          Welcome back, {`${currentUser.firstName}`}!
        </div>
        <div className="profile-sidebar">
          <div className="profile-sidebar-elements">
            <img
              src={`${currentUser.imageUrl}`}
              alt="current-user-profile-picture"
            />
            Name: {currentUser.firstName} {currentUser.lastName}
            E-mail: {currentUser.email}
            Favorites : {favoriteCharacters.map(favs => (<span>{favs.character_id}</span>))}
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Profile;
