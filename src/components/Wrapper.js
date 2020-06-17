import React, { useState, useEffect, useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

import { colors } from '../utils/colors';
import { ColorList } from './ColorList';

const Colors = ({ children }) => {
  const context = useContext(GlobalContext);

  return <div style={{ backgroundColor: context.color }}>{children}</div>;
};

export default Colors;
