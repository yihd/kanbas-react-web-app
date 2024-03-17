import React, { useState } from "react";

function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };

  const listItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    padding: '8px',
    background: '#f8f9fa',
    borderRadius: '5px',
    border: '1px solid #dee2e6'
  };

  const listContainerStyle = {
    maxWidth: '600px', // Adjust this value as needed
    padding: '0 15px' // Add some padding to not stick to the edges
  };

  return (
    <div style={listContainerStyle}>
      <h2>Array State Variable</h2>
      <button className="btn btn-success me-2" onClick={addElement}>Add Element</button>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {array.map((item, index) => (
          <li key={index} style={listItemStyle}>
            <span>{item}</span>
            <button className="btn btn-danger btn-sm" onClick={() => deleteElement(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayStateVariable;
