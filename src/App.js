import React, { useContext } from 'react';

import Colors from './components/Colors';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Speech from './utils/Speech';
import { GlobalState, GlobalContext } from './context/GlobalState';

import './App.css';

function App() {
  const context = useContext(GlobalContext);
  console.log('context', context.colorName);
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
