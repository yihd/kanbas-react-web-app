import React, { useState } from "react";

function Acme() {
  const [q, p] = useState({ w: "C", o: 25 }); // Initial state with `w` and `o`
  
  const e = () => {
    p({ ...q, w: "K" }); // Update state to change `w` to "K"
  };

  const u = (r: number) => {
    p({ ...q, o: r }); // Update state to change `o` to the new value `r`
  };

  return (
    <div>
      <h3>G: {q.w}</h3> // Display current value of `w` (G)
      <h3>Y: {q.o}</h3> // Display current value of `o` (Y)
      <button onClick={e}>M</button> // Button to change `w` to "K"
      <button onClick={() => u(30)}>H</button> // Button to change `o` to 30
    </div>
  );
}

export default Acme;
