import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import MenuItem from '../components/MenuItem/MenuItem';
import Inline from '../components/Inline/Inline';
import Link from '../components/Link/Link';
import Learn from './learn/Learn';


const AppWrapper = styled.div`
  text-align: center;
`;

const Body = styled.div`
  margin-top: 16px;
`;

const OpenApp = () => {
  const [exercises, setExersices] = useState([]);

  useEffect(() => {
    const fetchExercies = async () => {
      const response = await fetch('https://festive-beaver-65f40c.netlify.app/.netlify/functions/read-courses', {
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
    <Router>
      <AppWrapper>
        <Header>
          <Menu as={Inline}>
            <MenuItem>
              <Link to="/learn">Lära</Link>
            </MenuItem>
          </Menu>
        </Header>
        <Body>
          <h1>Kurs i matematik</h1>
          <Menu as={Inline}>
            {exercises.map(exercise => (
              <MenuItem fullWidth>
                <Link to={`/learn/${exercise.name}`}>{exercise.title}</Link>
              </MenuItem>
            ))}
          </Menu>
          <Switch>
            <Route path="/learn">
              <Learn />
            </Route>
            <Route path="/">
              <Redirect to="/learn" />
            </Route>
          </Switch>
        </Body>
      </AppWrapper>
    </Router>
  );
};

export default OpenApp;
