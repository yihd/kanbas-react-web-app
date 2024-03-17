import React from 'react';
import { useLocation } from 'react-router-dom';

const DebugComponent = () => {
  const location = useLocation();
  console.log(location.pathname);
  return <div>Current Path: {location.pathname}</div>;
};

export default DebugComponent;
