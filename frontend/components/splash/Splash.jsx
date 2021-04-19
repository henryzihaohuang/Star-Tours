import React from 'react';
import LoginButton from './LoginButton';
import LoginHandler from './LoginHandler';
import Button from 'react-bootstrap/Button';
import {useDispatch} from 'react-redux';
import { login } from '../../actions/sessionActions';

function Splash () {
  const dispatch = useDispatch();

  const handleDemo = () => {
    dispatch(login({ 
      email: "carriefisher4ever@gmail.com",
      password: "password123",
    }));
  };

  return (
    <section>
      <div className="splash-container">
        <div className="splash-subcontainer">
          <span className="splash-banner">
            <div className="splash-image-container">
              <img src="https://i.ibb.co/2t6w5Tk/new-story-assessment-logo.png" alt="the-force-fan-club-logo" />
            </div>
            <div className="splash-text-container">
              Do you walk through these doors? (Y/N)
            </div>
            <div className="splash-google-container">
             <LoginHandler />
             <LoginButton />
            </div>
              <Button className="demo-login" onClick={()=>handleDemo()}>
              Demo Login
              </Button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Splash;
