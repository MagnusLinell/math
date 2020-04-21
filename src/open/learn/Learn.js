import React from 'react';
import { useLocation } from 'react-router-dom';

const Lern = () => {
  const location = useLocation();
  return (
    <h1>{location.pathname}</h1>
  );
};

export default Lern;
