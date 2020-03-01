import React from "react";

import Colors from "./components/Colors";
import Speech from "./utils/Speech";
import { GlobalState } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalState>
      <Speech />
      <h1>Say A Colossr</h1>
      <Colors />
    </GlobalState>
  );
}

export default App;
