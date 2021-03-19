import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import Container from './Container';
import DealershipList from './DealershipList';

const Public = () => {
  const [isAdmin, setIsAdmin ] = useState(false);

  useEffect(() => {
    checkIsAdmin()
  }, []);

  const checkIsAdmin = async () => {
    try {
      const sessionData = await Auth.currentSession();
      const { idToken: { payload = {} } = {} } = sessionData;
      const hasAdminGroup =  (
        payload['cognito:groups'] && 
        Array.isArray(payload['cognito:groups']) && 
        payload['cognito:groups'].includes('Admin')
      ) ? true : false;
      setIsAdmin(hasAdminGroup);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Container>
      <h1>Dealerships</h1>
      <DealershipList isAdmin={ isAdmin } />
    </Container>
  );
}

export default Public;