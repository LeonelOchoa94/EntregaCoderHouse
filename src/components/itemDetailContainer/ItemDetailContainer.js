import React from 'react';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
  const { id, name } = useParams();
  return (
    <div>
      {name} {id}
    </div>
  );
};
