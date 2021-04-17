import React from 'react';
import LoginButton from './LoginButton';
import LoginHandler from './LoginHandler';

const Splash = () => {
  return (
    <section>
      <div className="splash-container">
        <div className="splash-subcontainer">
          <span className="splash-banner">
            <img src="https://i.ibb.co/2t6w5Tk/new-story-assessment-logo.png" alt="the-force-fan-club-logo" />
             Do you walk through these doors? (Y/N)
            <LoginHandler />
            <LoginButton />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Splash;
