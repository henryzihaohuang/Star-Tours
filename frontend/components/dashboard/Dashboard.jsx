import React from "react";
import Profile from "./Profile";
import CharacterList from "./CharacterList";

function Dashboard() {
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
