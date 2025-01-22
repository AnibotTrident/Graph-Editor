import React, { useState } from 'react';
import axios from 'axios';

const NodeEditor = () => {
  const [label, setLabel] = useState('');
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/test', {
        label,
        positionX,
        positionY,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error creating node:', error);
    }
  };

  return (
    <div>
      <h2>Create Node</h2>
      <form onSubmit={handleSubmit}>
        <label>Label:</label>
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
        <label>Position X:</label>
        <input
          type="number"
          value={positionX}
          onChange={(e) => setPositionX(e.target.value)}
        />
        <label>Position Y:</label>
        <input
          type="number"
          value={positionY}
          onChange={(e) => setPositionY(e.target.value)}
        />
        <button type="submit">Create Node</button>
      </form>
    </div>
  );
};

export default NodeEditor;
