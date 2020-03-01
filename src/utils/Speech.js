import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";
import { isValidColor } from "../utils/colors";
const Speech = () => {
  const { changeColor } = useContext(GlobalContext);

  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  function handlerResult({ results }) {
    //   logWords(results);
    const words = results[results.length - 1][0].transcript;
    //   console.log(words);
    //Cheeck if valid color
    let color = words.toLowerCase();
    color = color.replace(/\s/g, "");
    if (!isValidColor(color)) return;
    changeColor(color);
    //   colorSpan.classList.add("got");
    // console.log(colorSpan[0]);

    // console.log("this is a valid Color", color);
  }

  function start() {
    if (!("SpeechRecognition" in window)) {
      console.log("Support Not Availble");
      return;
    }
    // console.log("Starting..");
    //Make a new
    const recog = new window.SpeechRecognition();
    recog.continuous = true;
    recog.interimResults = true;
    recog.onresult = handlerResult;
    recog.start();
    // console.log(recog);
  }

  return <div>{start()}</div>;
};

export default Speech;
