import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";
import { fetchFavoriteCharacters } from "../../utils/swapiUtil";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Profile() {
  const currentUser = useSelector((state) => state.session.currentUser);
  const [favoriteCharacters, setfavoriteCharacters] = useState([]);

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
            <div className="profile-picture-container">
              <img
                src={`${currentUser.imageUrl}`}
                alt="current-user-profile-picture"
                style={{ height: "44vh" }}
              />
            </div>
            <div className="profile-name-field">
              Name: {currentUser.firstName} {currentUser.lastName}
            </div>
            <div className="profile-email-field">
              E-mail: {currentUser.email}
            </div>
            <div className="profile-favorites-field">
              Favorites : {favoriteCharacters.map((favs, idx) => (
                <span key={idx}>{favs.character_id}</span>
              ))}
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Profile;
