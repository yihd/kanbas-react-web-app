import React from 'react';
import './index.css';

function Classes() {
  const color = 'blue'; // Note: this 'color' variable is declared but not used.
  const dangerous = true;
  
  return (
    <div>
      <h2>Classes</h2>
      <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'} wd-fg-black wd-padding-10px`}>
        Dangerous background
      </div>
    </div>
  ); // Fixed the syntax by adding the closing parenthesis and curly brace
}

export default Classes;
