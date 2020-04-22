import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import MenuItem from '../components/MenuItem/MenuItem';
import Inline from '../components/Inline/Inline';
import Link from '../components/Link/Link';
import Courses from './Courses/Courses';
import EditCourse from './Courses/EditCourse';

const AppWrapper = styled.div`
  text-align: center;
`;

const Body = styled.div`
  margin-top: 16px;
`;

const AdminApp = () => {
  return (
    <Router>
      <AppWrapper>
        <Header>
          <Menu as={Inline}>
            <MenuItem>
              <Link to="/">Översikt</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/courses">Kurser</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/users">Användare</Link>
            </MenuItem>
          </Menu>
        </Header>
        <Body>
          <Switch>
            <Route path="/users">
              <div>users</div>
            </Route>
            <Route path="/courses" exact>
              <Courses />
            </Route>
            <Route path="/courses/add">
              <EditCourse />
            </Route>
            <Route path="/courses/:name">
              <EditCourse />
            </Route>
            <Route path="/">
              <div>home</div>
            </Route>
          </Switch>
        </Body>
      </AppWrapper>
    </Router>
  );
}

export default AdminApp;