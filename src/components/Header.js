import React, { useState, useEffect, useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

import { colors, isDark } from '../utils/colors';
import { ColorList } from './ColorList';

const Colors = () => {
  const [currentColor, setCurrentColor] = useState(false);

  const context = useContext(GlobalContext);
  useEffect(() => {
    if (context.color) {
      setCurrentColor(isDark(context.color));
    }
  }, [context.color]);

  return (
    <div>
      <h1
        style={{
          color: currentColor ? 'white' : 'black',
          padding: 0,
          margin: 0,
        }}
      >
        Say A Color
      </h1>
    </div>
  );
};

export default Colors;
