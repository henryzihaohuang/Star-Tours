import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

function RedirectToLogin({ location }) {
  useEffect(() => {
    window.sessionStorage.setItem(
      'afterSignInPath',
      `${location.pathname}${location.search}`,
    );
  }, []);

  return <Redirect to="/login" />;
}

export default withRouter(RedirectToLogin);