import React from 'react';
import {HashRouter} from 'react-router-dom';
import Header from './components/Header';
import routes from './routes';
import './reset.css';
import styled from 'styled-components';

function App() {
  return (
    <AppMC>
      <HashRouter>
        <Header />
        {routes}
      </HashRouter>
    </AppMC>
  );
}

export default App;

const AppMC = styled.section`
  background-color: #afd4c0;
  width: 100%;
  min-height: 100vh;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Open Sans", sans-serif, sans;
`