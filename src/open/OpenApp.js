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
import LearnCourse from './learn/LearnCourse';
import Learn from './learn/Learn';

const AppWrapper = styled.div`
  text-align: center;
`;

const Body = styled.div`
  margin-top: 16px;
`;

const OpenApp = () => (
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
        <Switch>
          <Route path="/learn" exact>
            <Learn />
          </Route>
          <Route path="/learn/:courseName">
            <LearnCourse />
          </Route>
          <Route path="/">
            <Redirect to="/learn" />
          </Route>
        </Switch>
      </Body>
    </AppWrapper>
  </Router>
);

export default OpenApp;
