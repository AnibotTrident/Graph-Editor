// src/components/Edge.js
import React, { useState, useEffect } from 'react';
import { createEdge, getNodes } from '../api';  // Import the createEdge and getNodes API functions

const Edge = () => {
  const [nodes, setNodes] = useState([]);
  const [edgeData, setEdgeData] = useState({ startNodeId: '', endNodeId: '' });

  useEffect(() => {
    const fetchNodes = async () => {
      try {
        const nodesData = await getNodes();
        setNodes(nodesData);
      } catch (error) {
        console.error('Error fetching nodes:', error);
      }
    };

    fetchNodes();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdgeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newEdge = await createEdge(edgeData);
      console.log('Edge created:', newEdge);
    } catch (error) {
      console.error('Error creating edge:', error);
    }
  };

  return (
    <div>
      <h2>Create Edge</h2>
      <form onSubmit={handleSubmit}>
        <select name="startNodeId" value={edgeData.startNodeId} onChange={handleChange}>
          <option value="">Select Start Node</option>
          {nodes.map((node) => (
            <option key={node._id} value={node._id}>{node.label}</option>
          ))}
        </select>
        <select name="endNodeId" value={edgeData.endNodeId} onChange={handleChange}>
          <option value="">Select End Node</option>
          {nodes.map((node) => (
            <option key={node._id} value={node._id}>{node.label}</option>
          ))}
        </select>
        <button type="submit">Create Edge</button>
      </form>
    </div>
  );
};

export default Edge;
