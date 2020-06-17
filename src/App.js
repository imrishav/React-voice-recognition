import React from 'react';
import { isChrome } from 'react-device-detect';

import Colors from './components/Colors';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Speech from './utils/Speech';
import { GlobalState } from './context/GlobalState';

import './App.css';

function App() {
  if (!isChrome) {
    return (
      <GlobalState>
        <Wrapper>
          <Header />
          <Speech />
          <Colors />
        </Wrapper>
      </GlobalState>
    );
  } else {
    return (
      <div
        style={{
          backgroundColor: 'green',
          width: 600,
          height: 200,
          margin: '0 auto',
        }}
      >
        <h1 style={{ color: 'antiquewhite' }}>Chrome Only!!!</h1>
        <p>
          The Voice Recogination is Only Available for Chrome.Please Choose
          Chrome.
        </p>
      </div>
    );
  }
}

export default App;
