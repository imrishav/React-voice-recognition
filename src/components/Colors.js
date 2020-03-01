import React, { useState, useEffect, useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

import { colors } from "../utils/colors";
import { ColorList } from "./ColorList";

const Colors = () => {
  const [colors1, setColors] = useState([]);

  const colorArray = Object.keys(colors).sort((a, b) => a.length - b.length);
  useEffect(() => {
    setColors(colorArray);
  }, []);
  const context = useContext(GlobalContext);
  console.log("context", context.color);

  return (
    <div className="colors" style={{ backgroundColor: "green" }}>
      {colors1.map((colors, index) => (
        <ColorList key={index} colors={colors} />
      ))}
    </div>
  );
};

export default Colors;
