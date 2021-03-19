import React from 'react';
import Container from './Container';
import protectedRoute from './protectedRoute';

const Protected = props => {
  return (
    <Container>
      <h1>Protected Route</h1>
    </Container>
  );
};

export default protectedRoute(Protected);