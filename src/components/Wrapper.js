import React, { useState, useEffect, useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

import { colors } from '../utils/colors';
import { ColorList } from './ColorList';

const Colors = ({ children }) => {
  // const [colors1, setColors] = useState([]);

  // const colorArray = Object.keys(colors).sort((a, b) => a.length - b.length);
  // console.log('colors', colorArray);
  // useEffect(() => {
  //   setColors(colorArray);
  // }, []);
  const context = useContext(GlobalContext);
  console.log('context ssss', context.color);

  return <div style={{ backgroundColor: context.color }}>{children}</div>;
};

export default Colors;
