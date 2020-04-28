import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu/Menu';
import MenuItem from '../../components/MenuItem/MenuItem';
import Inline from '../../components/Inline/Inline';
import Link from '../../components/Link/Link';
import styled from 'styled-components';

const Quote = styled.div`
  max-width: 600px;
  font-size: 14px;
  margin: 0 auto 16px auto;
`;

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
      <h1>Lär dig begrepp på svenska</h1>
      <Quote>"Begrepp är inom filosofin det abstrakta innehållet i en språklig term, i kontrast till termen själv och de konkreta eller abstrakta objekt den syftar på. Ett föremål som uppfyller ett antal begreppskännetecken sägs äga det begreppsinnehåll som krävs för att falla under ett visst begrepp." - Wikipedia</Quote>
      <h2>Fysik</h2>
      <Menu as={Inline}>
        {exercises.map((exercise, index) => (
          <MenuItem fullWidth key={index}>
            <Link to={`/learn/${exercise.name}`}>{exercise.title}</Link>
          </MenuItem>
        ))}
      </Menu>
      <h2>Ekonomi</h2>
      <p>Finns inte än</p>
    </>
  );
};

export default Lern;
