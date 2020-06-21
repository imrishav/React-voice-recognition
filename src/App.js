import React from 'react';
import { isChrome } from 'react-device-detect';

import Colors from './components/Colors';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Speech from './utils/Speech';
import { GlobalState } from './context/GlobalState';

import './App.css';

function App() {
  if (isChrome) {
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
      <div style={{ backgroundColor: '#30343F', height: '100vh' }}>
        <div
        // style={{
        //   backgroundColor: 'green',
        //   width: 600,
        //   height: 200,
        //   margin: '0 auto',
        // }}
        >
          <h1
            style={{
              color: 'antiquewhite',
              fontSize: '60px',
              fontFamily: "font-family: 'PT Sans', sans-serif;",
            }}
          >
            Chrome Only!!!
          </h1>
          <p
            style={{
              color: 'white',
              fontFamily: "font-family: 'PT Sans', sans-serif;",
            }}
          >
            The Voice Recogination is Only Available for Chrome.Please Choose
            Chrome.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
