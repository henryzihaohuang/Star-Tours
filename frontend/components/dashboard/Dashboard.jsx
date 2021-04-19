import React from "react";
import { useDispatch } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "./Profile";
import CharacterList from "./CharacterList";

function Dashboard() {
  const dispatch = useDispatch();

  return (
    <section className="dashboard-container">
      <div className="dashboard-subcontainer">
        <div>
          <Profile />
        </div>
        <div>
          <CharacterList />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
