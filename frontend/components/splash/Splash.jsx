import React from 'react';
import LoginButton from './LoginButton';
import LoginHandler from './LoginHandler';

const Splash = () => {

  return (
    <section>
      <div className="splash-container">
        <div className="splash-subcontainer">
          <span className="splash-element">
            <LoginHandler />
            <LoginButton />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Splash;
