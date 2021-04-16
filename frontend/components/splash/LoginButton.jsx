import React, { useDispatch } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import auth0js from 'auth0-js';
import { login } from '../../actions/sessionActions';
const gmailMetadataScope = 'https://www.googleapis.com/auth/gmail.metadata';

function LoginButton() {
  const clientID = process.env.AUTH0_CLIENT_ID;
  const domain = process.env.AUTH0_DOMAIN;

  const auth0WebAuth = new auth0js.WebAuth({
    clientID,
    domain,
  });

  const handleGmailLogin = () =>
    auth0WebAuth.authorize({
      scope: 'openid email',
      responseType: 'token id_token',
      redirectUri: `${window.location.origin}/login`,
      connection: 'google-oauth2',
      connectionScope: [gmailMetadataScope].join(','),
      prompt: 'consent',
      access_type: 'offline',
    });

  const handleDemo = () => {
    const dispatch = useDispatch();
    const demoUser = { email: "carriefisher4ever@gmail.com", password: "password123" };
    dispatch(login(demoUser));
  }
    
  return (
    <Row float="center">
      <Col className="splash-banner">
        <img src="https://i.ibb.co/2t6w5Tk/new-story-assessment-logo.png" alt="the-force-fan-club-logo" />

        <Button className="google-login" onClick={handleGmailLogin}>
          <img
            src="https://img.icons8.com/bubbles/344/google-logo.png"
            alt="google-logo-login"
            className="login-google-logo"
            style={{width:"2vw"}}
          />
          Sign In With Google
        </Button>

        <Button className="demo-login" onClick={handleDemo()}>
          Demo Login
        </Button>
      </Col>
    </Row>
  );
}

export default LoginButton;
