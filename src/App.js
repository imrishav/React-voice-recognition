import React from 'react';

import Colors from './components/Colors';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Speech from './utils/Speech';
import { GlobalState } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalState>
      <Wrapper>
        <Header />
        <Speech />
        <Colors />
      </Wrapper>
    </GlobalState>
  );
}

export default App;
