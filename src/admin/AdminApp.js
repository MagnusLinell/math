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
              <Link to="/control">Översikt</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/control/courses">Kurser</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/control/users">Användare</Link>
            </MenuItem>
          </Menu>
        </Header>
        <Body>
          <Switch>
            <Route path="/control/users">
              <div>users</div>
            </Route>
            <Route path="/control/courses" exact>
              <Courses />
            </Route>
            <Route path="/control/courses/add">
              <EditCourse />
            </Route>
            <Route path="/control/courses/:name">
              <EditCourse />
            </Route>
            <Route path="/control">
              <div>home</div>
            </Route>
          </Switch>
        </Body>
      </AppWrapper>
    </Router>
  );
}

export default AdminApp;