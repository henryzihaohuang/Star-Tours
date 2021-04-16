import { useEffect } from 'react';
import { connect } from 'react-redux';
import { registerCredentialToken } from '../../actions/gmailAuthTokenActions';
import auth0js from 'auth0-js';

function LoginHandler({
  onError = console.error,
  onNotFound = () => {},
  registerCredentialToken,
}) {

  const onSuccess = authResult => {
    registerCredentialToken(authResult.idToken);
    const afterSignInPath = window.sessionStorage.getItem('afterSignInPath');
    if (afterSignInPath) {
      window.sessionStorage.removeItem('afterSignInPath');
      // Hard redirect for now due to redirecting via history gets tangled with the other redirects in /App
      window.location = afterSignInPath;
    } else {
      localStorage.clear()
    }
  };

  useEffect(() => {
    const clientID = process.env.AUTH0_CLIENT_ID;
    const domain = process.env.AUTH0_DOMAIN;
    const auth0WebAuth = new auth0js.WebAuth({
      clientID,
      domain,
    });

    auth0WebAuth.parseHash(
      { hash: window.location.hash },
      (error, authResult) => {
        if (error) {
          window.history.pushState(
            '',
            document.title,
            window.location.pathname + window.location.search,
          );
          return onError(error);
        }
        if (!authResult) {
          return onNotFound();
        }

        window.history.pushState(
          '',
          document.title,
          window.location.pathname + window.location.search,
        );
        return onSuccess(authResult);
      },
    );
  }, []);
  return null;
}

export default connect(null, dispatch => ({
  registerCredentialToken: token => dispatch(registerCredentialToken(token)),
}))(LoginHandler);
