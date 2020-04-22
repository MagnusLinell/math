import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Lern = () => {
  const location = useLocation();
  const { courseName } = useParams();
  return (
    <h1>{location.pathname} {courseName}</h1>
  );
};

export default Lern;
