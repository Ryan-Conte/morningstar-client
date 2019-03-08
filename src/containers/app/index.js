import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import Information from '../information'
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';

const Main = styled.main`
  padding-top:3em;
`;

const App = () => (
  <div>
    <Main>
      <Route exact path="/" component={Home} />
      <Route exact path="/:ticker" component={Information} />
    </Main>
  </div>
)

export default App
