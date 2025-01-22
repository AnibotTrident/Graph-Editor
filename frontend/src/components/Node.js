// src/components/Node.js
import React, { useState } from 'react';
import { createNode } from '../api';  // Import the createNode API function

const Node = () => {
  const [nodeData, setNodeData] = useState({ label: '', position: { x: 0, y: 0 } });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNodeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newNode = await createNode(nodeData);
      console.log('Node created:', newNode);
    } catch (error) {
      console.error('Error creating node:', error);
    }
  };

  return (
    <div>
      <h2>Create Node</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="label"
          placeholder="Node Label"
          value={nodeData.label}
          onChange={handleChange}
        />
        <input
          type="number"
          name="position.x"
          placeholder="X Position"
          value={nodeData.position.x}
          onChange={handleChange}
        />
        <input
          type="number"
          name="position.y"
          placeholder="Y Position"
          value={nodeData.position.y}
          onChange={handleChange}
        />
        <button type="submit">Create Node</button>
      </form>
    </div>
  );
};

export default Node;
