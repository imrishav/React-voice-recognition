import React, { useContext } from 'react';

import { isDark } from '../utils/colors';
import { GlobalContext } from '../context/GlobalState';

export const ColorList = (props) => {
  const { color } = useContext(GlobalContext);
  // already(color);
  return (
    <span
      className={`color ${isDark(props.colors) && 'dark'} ${props.colors} ${
        props.colors === color ? 'got' : ''
      }`}
      style={{ backgroundColor: `${props.colors}` }}
    >
      {props.colors}
    </span>
  );
};
