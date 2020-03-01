import { isValidColor } from "../utils/colors";

export function handlerResult({ results }) {
  //   logWords(results);
  const words = results[results.length - 1][0].transcript;
  //   console.log(words);
  //Cheeck if valid color
  let color = words.toLowerCase();
  color = color.replace(/\s/g, "");
  if (!isValidColor(color)) return;
  const colorSpan = document.getElementsByClassName(color);
  //   colorSpan.classList.add("got");
  console.log(colorSpan[0]);

  console.log("this is a valid Color", color);
}

// function logWords(results) {
//   console.log(results[results.length - 1][0].transcript);
// }
