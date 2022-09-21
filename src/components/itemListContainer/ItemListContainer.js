import { Container } from '@mui/material';
import React from 'react';

export const ItemListContainer = ({ greeting }) => {
  return (
    <Container>
      <h1>{greeting}</h1>
    </Container>
  );
};
