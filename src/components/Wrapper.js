import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

const Colors = ({ children }) => {
  const context = useContext(GlobalContext);

  return <div style={{ backgroundColor: context.color }}>{children}</div>;
};

export default Colors;
