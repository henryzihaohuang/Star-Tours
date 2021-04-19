import React from "react";
import { Link } from 'react-router-dom';
import Profile from "./Profile";
import CharacterList from "./CharacterList";

function Dashboard() {
  return (
    <section className="dashboard-container">
      <div className="dashboard-subcontainer">
        <Link to="/people">
          <img src="https://i.ibb.co/2t6w5Tk/new-story-assessment-logo.png" alt="star-tours-logo" style={{width:'100px'}}/>
        </Link>
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
