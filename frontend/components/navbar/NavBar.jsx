import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { logout } from "../../actions/sessionActions";
import { useDispatch } from "react-redux";

function NavBar() {
  const dispatch = useDispatch();
  return (
    <div className="navbar-container">
      <div className="navbar-logo-wrapper">
        <Link to="/people">
          <img
            src="https://i.ibb.co/2t6w5Tk/new-story-assessment-logo.png"
            alt="star-tours-logo"
            style={{ width: "100px" }}
          />
        </Link>
      </div>
      <div className="navbar-logout-container">
        <Button onClick={() => dispatch(logout())} className="logout-btn">
          LOGOUT
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
