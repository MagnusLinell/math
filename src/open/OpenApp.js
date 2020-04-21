import React from 'react';
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
            <MenuItem><Link to="/learn/numbers-1">Taluppfattning och tals användning</Link></MenuItem>
            <MenuItem><Link to="/learn/algebra-1">Algebra</Link></MenuItem>
            <MenuItem><Link to="/learn/geometry-1">Geometri</Link></MenuItem>
            <MenuItem><Link to="/learn/probabiliy-1">Sannolikhet och statistik</Link></MenuItem>
            <MenuItem><Link to="/learn/connection-1">Samband och förändring</Link></MenuItem>
            <MenuItem><Link to="/learn/problemsolvning-1">Problemlösning</Link></MenuItem>
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
