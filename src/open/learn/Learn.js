import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu/Menu';
import MenuItem from '../../components/MenuItem/MenuItem';
import Inline from '../../components/Inline/Inline';
import Link from '../../components/Link/Link';

const Lern = () => {
  const [exercises, setExersices] = useState([]);

  useEffect(() => {
    const fetchExercies = async () => {
      const response = await fetch('/.netlify/functions/read-courses', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });
      const body = await response.json();
      if (body) {
        setExersices(body);
      }
    }
    fetchExercies();
  }, []);

  return (
    <>
      <h1>Kurs i matematik</h1>
      <Menu as={Inline}>
        {exercises.map((exercise, index) => (
          <MenuItem fullWidth key={index}>
            <Link to={`/learn/${exercise.name}`}>{exercise.title}</Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Lern;
