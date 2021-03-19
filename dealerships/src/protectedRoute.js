import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router-dom';

const defaultUnauthenticatedRoute = '/profile';

const protectedRoute = (Comp, route = defaultUnauthenticatedRoute) => props => {
  let history = useHistory();

  useEffect(() => {
    const checkAuthState = async () => {
      try {
        await Auth.currentAuthenticatedUser()
      } catch(e) {
        history.push(route)
      }
    }
    checkAuthState()
  }, [history]);

  return <Comp {...props} />
}

export default protectedRoute;